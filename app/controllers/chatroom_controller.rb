class ChatroomController < ApplicationController
  def index
    chatroom = Chatroom.find(:id)
    @messages = chatroom.message.all
  end

  def create
    user = User.find(session[:user_id])
    chatroom = Chatroom.find(:id)
    @message = chatroom.messages.create(message: params[:message], user_id: user.id)
  end

  def new
  end

  def destroy
  end
end
