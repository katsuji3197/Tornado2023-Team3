class Api::V1::UsersController < ApplicationController
  def index
    render json: { message: "Hello World" }
  end

  def show
    user = current_api_v1_user
    render json: { status: 200, user: user }
  end
end
