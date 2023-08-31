class Api::V1::UsersController < ApplicationController
  before_action :authenticate_api_v1_user!, only: %i[show update]
  before_action :set_current_user, only: %i[show update destroy]

  def index
    render json: { message: 'Hello World' }
  end

  def show
    render json: { status: 200, user: @current_user }
  end

  def update
    if @current_user.update(user_params)
      render json: { status: 200, user: @current_user }
    else
      render json: { status: 500, errors: @current_user.errors.full_messages }
    end
  end

  def destroy
    @current_user.destroy
    render json: { status: 200, message: 'User has been deleted' }
  end

  private

  def set_current_user
    @current_user = current_api_v1_user
  end

  def user_params
    params.require(:user).permit(
      :first_name,
      :last_name,
      :name,
      :email,
      :sex,
      :birthdate,
      :hometown,
      :residence,
      :occupation,
      :major,
      :mbti,
      :image,
      :introduction
    )
  end
end
