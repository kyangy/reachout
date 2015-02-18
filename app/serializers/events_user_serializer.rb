class EventsUserSerializer < ActiveModel::Serializer
  attributes :id, :name

  belongs_to :events
  belongs_to :users

  def name
  	object.event.name
  end

end
