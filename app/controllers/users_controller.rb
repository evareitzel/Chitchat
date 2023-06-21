class UsersController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
  
  # user can join a group

  def index
    render json: User.all
  end

  def show
    user = User.find_by(id: session[:user_id])
    if user
      render json: user
    else
      render json: { errors: ["Not authorized"] }, status: :unauthorized
    end
  end

  def create
    user = User.create(user_params) # create!
    if user.valid?
      render json: user, status: :created
    else
      render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

  def find_user
    User.find(params[:id])
  end

  def user_params
    params.permit(:username, :password, :password_confirmation)
  end

  def render_not_found_response
    render json: { errors: ["User not found"]}, status: :not_found
  end

end
