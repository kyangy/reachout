module API
	class EventsController < ApplicationController
		include EventsHelper
		
		protect_from_forgery with: :null_session

		respond_to :json, :html

		def index
			respond_with Event.all
		end

		def show
			respond_with Event.find(params[:id])
			event = Event.find(params[:id])
			address = event.location
			# binding.pry
			google_maps(address)
		end

		def create
			# user = User.find(params[:user_id])
			# event = user.events.create(event_params)
			event = Event.new(event_params)
			user = User.find(params[:user_id])
			event.creator = user
			# event.image = params[:file]

			if event.save
				render json: event, status: 201
			else
				render json: {errors: event.errors}, status: 422
			end
		end

		def update
			event = Event.find(params[:id])
			if event.update(event_params)
				render json: event, status: 200
			else
				render json: {errors: event.errors}, status: 422
			end
		end

		def destroy
			event = Event.find(params[:id])
			event.destroy
			head 204
		end

		def add_volunteer
			volunteer = EventsUser.new
			volunteer.user_id = params[:user_id]
			volunteer.event_id = params[:event_id]
			if volunteer.save
				render json: volunteer, status: 201
			else
				render json: {errors: volunteer.errors}, status: 422
			end
		end

		def add_comment
			comment = Comment.new
			comment.user_id = params[:user_id]
			comment.event_id = params[:event_id]
		end

		private

		def event_params
			params.require(:event).permit(:title, :description, :location, :goal, :date, :image, :hours, :short, :geocode, :user_id)
		end
	end
end
