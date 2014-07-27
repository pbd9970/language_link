class UpdateChatroomTable < ActiveRecord::Migration
  def change
    rename_table :chat_users, :chatroom_users
  end
end