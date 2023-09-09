class Api::V1::MatchedUsersController < ApplicationController
  before_action :set_current_user, only: [:index, :create, :update]

  # 指定した日時と場所のマッチングを持つユーザーを全て取得する
  # def index
  #   # 分単位だとマッチングができないので、
  #   # ここで一旦match_dateを1時間単位に変換
  #   # * 例: 2021-09-01 12:30:00 => 2021-09-01 12:00:00
  #   binding.pry
  #   match_date = Time.zone.parse(match_params[:match_date]).beginning_of_hour
  #   # matchIDはリクエストで来る dateとmeet_locationから取得する
  #   # MatchedUserのmatch_idが指定のmatch_idと一致するものを全て取得し、そのユーザーずを取得する
  #   match_id = Match.find_by(match_date: match_date, meet_location: match_params[:meet_location])
  #   matched_users = MatchedUser.where(match_id: match_id).map(&:user)
  #   if matched_users
  #     matched_users.
  #     render json: { status: 200, matched_users: matched_users }
  #   else
  #     render json: { status: 404, error: 'Matched user not found' }
  #   end
  # end

  def index
    matched_users = MatchedUser.where(user_id: @current_user.id, match_id: matched_user_params[:match_id]).map(&:user)

    if matched_users
      render json: { status: 200, matched_users: matched_users }
    else
      render json: { status: 404, error: 'Matched users not found' }
    end
  end

  def create
    @matched_user = MatchedUser.find_or_initialize_by(user_id: matched_user_params[:user_id], match_id: matched_user_params[:match_id], status: 'pending')
    if @matched_user.persisted?
      render json: { status: 500, error: 'Matched user already exists' }
    else
      @matched_user.save
      render json: { status: 200, matched_user: @matched_user }
    end
  end

  def update
    match = Match.find_by(id: matched_user_params[:match_id])
    @matched_user = MatchedUser.find_or_initialize_by(user: @current_user, match: match)
    if @matched_user&.update(status: matched_user_params[:status])
      render json: { status: 200, matched_user: @matched_user }
    else
      render json: { status: 500, error: 'Unable to update matched user status' }
    end
  end

  private

  def set_current_user
    @current_user = current_api_v1_user
  end

  def matched_user_params
    params.require(:matched_user).permit(:match_id, :status, :user_id)
  end

  def match_params
    params.require(:match).permit(:match_date, :meet_location)
  end
end
