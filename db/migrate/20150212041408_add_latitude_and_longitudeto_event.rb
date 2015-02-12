class AddLatitudeAndLongitudetoEvent < ActiveRecord::Migration
  def change
  	add_column :events, :latitude, :float
  	add_column :events, :longitutde, :float
  end
end
