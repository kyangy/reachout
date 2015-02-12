class User < ActiveRecord::Base

	has_many :events, through: :user_events
	has_many :user_events
	has_many :events, as: :creator

	has_secure_password

	validates :username, presence: true
	validates :name, presence: true
	validates :email, presence: true, format: { with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i }, uniqueness: {case_sensitive: false}, length: {maximum: 255}
	validates :password, length: {minimum: 6}
end
