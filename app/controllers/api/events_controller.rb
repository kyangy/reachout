module API
	class EventsController < ApplicationController
		protect_from_forgery with: :null_session

		respond_to :json

		def index
			respond_with Event.all
		end

		def show
			respond_with Event.find(params[:id])
		end

		def create
			event = Event.new(event_params)
			user = User.find(params[:user_id])
			event.user = user

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

		private

		def event_params
			params.require(:event).permit(:title, :description, :location, :goal, :duration, :image)
		end
	end
end
