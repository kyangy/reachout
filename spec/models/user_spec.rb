require 'rails_helper'

RSpec.describe User, :type => :model do
  
	it 'has a factory for user'
	it 'is invalid without a username'
	it 'is invalid without a name'
	it 'is invalid without an email'
	it 'should have a password minimum length'
end
