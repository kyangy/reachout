class Event < ActiveRecord::Base

	has_many :users, through: :user_events
	has_many :user_events
	belongs_to :creator, class_name: "User"

	mount_uploader :image, AvatarUploader
end
