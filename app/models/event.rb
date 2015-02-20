class Event < ActiveRecord::Base

	has_many :users, through: :events_users
	has_many :events_users
	belongs_to :creator, class_name: "User"
	
	has_many :comments, dependent: :destroy

	mount_uploader :image, AvatarUploader

	validates :title, presence: true
	validates :description, presence: true
	validates :location, presence: true
	validates :goal, presence: true
	validates :date, presence: true
	validates :short, presence: true, length: {maximum: 40}
	
	geocoded_by :location   # can also be an IP address
	after_validation :geocode          # auto-fetch coordinates
end

