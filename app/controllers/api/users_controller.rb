module API
	class UsersController < ApplicationController
	
		protect_from_forgery with: :null_session

		respond_to :json, :html

		def show
			@user = User.find(params[:id])
			@events_created = Event.where(creator_id: @user.id)
			@events_joined = EventsUser.where(user_id: @user.id)
			respond_with joined: @events_joined, created: @events_created, user_details: @user
		end
	end
end