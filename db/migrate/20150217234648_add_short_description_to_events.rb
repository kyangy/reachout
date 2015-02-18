class AddShortDescriptionToEvents < ActiveRecord::Migration
  def change
  	add_column :events, :short, :string
  end
end
