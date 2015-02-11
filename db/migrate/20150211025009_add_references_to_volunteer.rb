class AddReferencesToVolunteer < ActiveRecord::Migration
  def change
  	add_reference :volunteers, :user, index: true
  	add_reference :volunteers, :event, index: true
  end
end
