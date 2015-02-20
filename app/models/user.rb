class User < ActiveRecord::Base

	has_many :events, through: :events_users
	has_many :events_users
	# has_many :events, as: :creator
	
	has_many :comments, dependent: :destroy

	has_secure_password

	def created_events 
		Event.where(creator: self)
	end

	validates :username, presence: true, uniqueness: { case_sensitive: false }
	validates :name, presence: true, uniqueness: { case_sensitive: false }
	validates :email, presence: true, format: { with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i }, uniqueness: {case_sensitive: false}, length: {maximum: 255}
	validates :password, length: {minimum: 6}
end
