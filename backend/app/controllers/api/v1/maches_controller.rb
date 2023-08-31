  before_action :set_current_user, only: [:find_match]

  def find_match
    # ログイン中のユーザーがすでにマッチングを申し込んでいる場合は既存のマッチを探します
    current_user_match = @current_user.matched_users
                                      .where(status: 'pending')
                                      .joins(:match)
                                      .find_by(matches: { match_date: match_params[:match_date], meet_location: match_params[:meet_location] })
    if current_user_match
      match = current_user_match.match
    else
      match = find_or_create_match
      MatchedUser.create(user: @current_user, match: match, status: 'pending')
    end

    render json: { status: 200, match: match }
  end

  def create
    match = Match.new(match_params)
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
    match = Match.left_outer_joins(:matched_users)
                  .group('matches.id')
                  .having('COUNT(matched_users.id) < 6')
                  .where(match_date: match_params[:match_date], meet_location: match_params[:meet_location])
                  .first
    # 既存のマッチが見つからなかった場合、新しいマッチを作成
    match || Match.create(match_params)
  end


  def match_params
    params.require(:match).permit(:match_date, :meet_location)
  end
end
