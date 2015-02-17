module SessionsHelper

	def log_in(user)
		cookies[:id] = user.id
	end

	def current_user
		if cookies[:id]
			@current_user ||= User.find(cookies[:id])
		end
	end

	def logged_in?
	  	!current_user.nil?
	end

	def log_out    
	  	session.delete(:id)
	  	cookies.delete('id')
	  	@current_user = nil
	end

end
