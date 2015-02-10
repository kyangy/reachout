class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.string :title
      t.string :description
      t.string :location
      t.string :goal
      t.string :duration

      t.timestamps null: false
    end
  end
end
