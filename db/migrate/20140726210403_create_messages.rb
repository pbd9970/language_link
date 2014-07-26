class CreateMessages < ActiveRecord::Migration
  def change
    create_table :messages do |t|
      t.belongs_to :chatroom
      t.string :message
      t.belongs_to :user
      t.boolean :sent

      t.timestamps
    end
  end
end
