class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :name, :email
  has_many :events, root: :joined_events
  has_many :created_events
end
