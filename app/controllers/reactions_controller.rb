class ReactionsController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

  def index
    render json: Reation.all
  end

  def create
    reaction = Reaction.create!(reaction_params)
    render json: reaction, status: :created
  end

  private

  def reaction_params
    params.permit(:emotion, :message_id, :user_id)
  end

  def find_reaction
    Reaction.find(params[:id])
  end

  def render_not_found_response
    render json: { errors: ["Reaction not found"]}, status: :not_found
  end

end
