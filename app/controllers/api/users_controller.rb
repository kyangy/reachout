module API
	class UsersController < ApplicationController

		protect_from_forgery with: :null_session

		respond_to :json, :html

		def index
			respond_with User.all
		end

		def show
			respond_with User.find(params[:id])
		end

		def new
			@user = User.new
			if logged_in?
				redirect_to root_path
			end
		end

		def create
			@user = User.new(user_params)
			if @user.save
				log_in @user
				redirect_to root_path
			else
				render :new
			end
		end

		private

		def user_params
			params.require(:user).permit(:username, :name, :email, :password, :password_confirmation)
		end
	end
end
