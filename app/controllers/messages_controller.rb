class MessagesController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
  
  def index
    render json: Message.all
  end

  def show
    message = find_message
    render json: message
  end

  def create
    message = Message.create!(message_params)
    # time = DateTime.now() # FIX
    render json: message, status: :created
  end

  def update
    message = find_message
    message.update!(message_params)
    render json: message
  end

  def destroy
    message = find_message
    message.destroy
    head :no_content
  end

  private

  def message_params
    params.permit(:text, :time, :group_id, :user_id)
  end

  def find_message
    @current_user.Message.find(params[:id]) # fix errors msg
  end


  def render_not_found_response
    render json: { errors: ["Message not found"]}, status: :not_found
  end

end
