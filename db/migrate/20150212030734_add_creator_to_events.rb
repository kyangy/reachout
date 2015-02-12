class AddCreatorToEvents < ActiveRecord::Migration
  def change
    add_reference :events, :creator, index: true
    # add_foreign_key :events, :users
  end
end
