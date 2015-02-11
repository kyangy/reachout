class RenameTable < ActiveRecord::Migration
  def change
  	rename_table :volunteers, :user_events
  end
end
