class EventsController < ApplicationController

	def index
		@events = Event.all
	end

	def new
		@event = Event.new
	end

	def create
		@event = Event.new(events_params)
	end

	def edit
	end

	def update
	end

	def show
		@event = Event.find(params[:id])
	end

	def destroy
		@event = Event.find(params[:id])
	end

	private

	def events_params
		params.require(:events).permit(:title, :description, :location, :goal, :duration)
	end
end
