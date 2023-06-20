class ReactionsController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

  def show
    reaction = find_reaction
    render json: reaction
  end

  def create
    reaction = Reaction.create!(reaction_params)
    render json: reaction, status: :created
  end

  def destroy
    reaction = find_reaction
    reaction.destroy
    head :no_content
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
