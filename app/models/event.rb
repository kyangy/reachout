class Event < ActiveRecord::Base

	has_many :users, through: :user_events
	has_many :user_events
	belongs_to :creator, class_name: "User"

	mount_uploader :image, AvatarUploader

	# geocoded_by :address   # can also be an IP address
	# after_validation :geocode          # auto-fetch coordinates
end
