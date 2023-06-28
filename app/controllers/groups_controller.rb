class GroupsController < ApplicationController  
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

  skip_before_action :authorize, only: :index

  def index
    render json: Group.all
  end

  def show
    group = find_group
    render json: group
  end

  private

  def find_group
    Group.find(params[:id])
  end

  def render_not_found_response
    render json: { errors: ["Group not found"]}, status: :not_found
  end
  
end
