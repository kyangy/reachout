class EventsController < ApplicationController

	def index
		@events = Event.all
	end

	def new
		@event = Event.new
	end

	def create
		@event = Event.new(event_params)
		if @event.save
			redirect_to events_path
		else
			render :new
		end
	end

	def edit
		@event = Event.find(params[:id])
	end

	def update
		@event = Event.find(params[:id])
		if @event.update_attributes(event_params)
			redirect_to event_path(@event)
		else
			render :edit
		end
	end

	def show
		@event = Event.find(params[:id])
	end

	def destroy
		@event = Event.find(params[:id])
	end

	private

	def event_params
		params.require(:event).permit(:title, :description, :location, :goal, :duration)
	end
end
