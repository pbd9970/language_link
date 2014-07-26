class CreateChatUsers < ActiveRecord::Migration
  def change
    create_table :chat_users do |t|
      t.belongs_to :chatroom
      t.belongs_to :user

      t.timestamps
    end
  end
end
