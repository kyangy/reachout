class UsersController < ApplicationController
	
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

	def edit
		@user = current_user
	end

	def update
		@user = current_user
		if @user.update_attributes(user_params)
			redirect_to root_path
		else
			render :edit
		end
	end

	private

	def user_params
		params.require(:user).permit(:username, :name, :email, :password, :password_confirmation)
	end

end
