class Api::V1::MatchesController < ApplicationController
  before_action :set_current_user, only: [:find_match]

  def find_match
    # 分単位だとマッチングができないので、
    # ここで一旦match_dateを1時間単位に変換
    # * 例: 2021-09-01 12:30:00 => 2021-09-01 12:00:00
    match_date = Time.zone.parse(match_params[:match_date]).beginning_of_hour
    # ログイン中のユーザーがすでにマッチングを申し込んでいる場合fは既存のマッチを探します
    current_user_match = @current_user.matched_users
                                      .where(status: 'pending')
                                      .joins(:match)
                                      .find_by(matches: { match_date: match_date, meet_location: match_params[:meet_location] })
    if current_user_match
      match = current_user_match.match
    else
      match = find_or_create_match
      MatchedUser.create(user: @current_user, match: match, status: 'pending')
    end

    render json: { status: 200, match: match }
  end

  def create
    match_date = Time.zone.parse(match_params[:match_date]).beginning_of_hour
    match = Match.new(match_date: match_date, meet_location: match_params[:meet_location])
    if match.save
      render json: { status: 200, match: match }
    else
      render json: { status: 500, errors: match.errors.full_messages }
    end
  end

  private

  def set_current_user
    @current_user = current_api_v1_user
  end

  def find_or_create_match
    match_date = Time.zone.parse(match_params[:match_date]).beginning_of_hour
    match = Match.left_outer_joins(:matched_users)
                  .group('matches.id')
                  .having('COUNT(matched_users.id) < 6')
                  .where(match_date: match_date, meet_location: match_params[:meet_location])
                  .first
    # 既存のマッチが見つからなかった場合、新しいマッチを作成
    match || Match.create(match_date: match_date, meet_location: match_params[:meet_location])
  end


  def match_params
    params.require(:match).permit(:match_date, :meet_location)
  end
end
