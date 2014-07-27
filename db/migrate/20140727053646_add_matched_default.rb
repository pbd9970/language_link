class AddMatchedDefault < ActiveRecord::Migration
  def up
    change_column :chatrooms, :matched, :boolean, default: false
  end

end
