class ChatroomController < ApplicationController
  def show
    @user = User.find(1)
    @chatroom = Chatroom.find(params[:id])
    @messages = @chatroom.messages.all
  end

  def create
    @user = User.find(params[:user_id])
    chatroom = Chatroom.find(params[:chatroom_id])
    @message = chatroom.messages.create(message: params[:message], user_id: @user.id)
    redirect_to "/chatroom/1"
  end

  def new
  end

  def destroy
  end
end
