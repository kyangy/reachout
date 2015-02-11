class Event < ActiveRecord::Base

	has_many :users, through: :user_events
	has_many :user_events

	mount_uploader :image, AvatarUploader
end
