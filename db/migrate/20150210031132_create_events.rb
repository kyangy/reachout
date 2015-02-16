class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.string :title, null: false
      t.string :description, null: false
      t.string :location, null: false
      t.string :goal, null: false
      t.string :duration, null: false

      t.timestamps null: false
    end
  end
end
