class Api::V1::MachedUsersController < ApplicationController
  before_action :set_current_user

  def create
    @matched_user = MatchedUser.find_or_initialize_by(user: @current_user, match_id: matched_user_params[:match_id])
    if @matched_user.persisted?
      render json: { status: 400, error: "You've already applied for this time and location" }
    else
      @matched_user.status = 'pending'
      @matched_user.save!
      render json: { status: 200, matched_user: @matched_user }
    end
  end

  def update
    @matched_user = MatchedUser.find_by(user: @current_user, match_id: matched_user_params[:match_id])
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
    params.require(:matched_user).permit(:match_id, :status)
  end
end
