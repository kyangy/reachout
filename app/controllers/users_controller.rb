class UsersController < ApplicationController

	def new
		@user = User.new
		if logged_in?
			redirect_to root_path
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
