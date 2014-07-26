class CreateChatrooms < ActiveRecord::Migration
  def change
    create_table :chatrooms do |t|
      t.boolean :matched
      t.string :language

      t.timestamps
    end
  end
end
