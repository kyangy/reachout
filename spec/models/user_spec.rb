require 'rails_helper'

RSpec.describe User, :type => :model do
  
	it 'has a factory for user' do
		expect(FactoryGirl.build(:user)).to be_valid
	end

	it 'is invalid without a username' do
		user = FactoryGirl.build(:user, username: nil)
		expect(user).to be_invalid
	end

	it 'is invalid without a name' do
		user = FactoryGirl.build(:user, name: nil)
		expect(user).to be_invalid
	end

	it 'is invalid without an email' do
		user = FactoryGirl.build(:user, email: nil)
		expect(user).to be_invalid
	end

	it 'is invalid if the email is not formatted properly' do
		user = FactoryGirl.build(:user, email: 'cnjeanacoce')
		expect(user).to be_invalid
	end

	it 'should have a password minimum length' do
		user = FactoryGirl.build(:user, password: 'sdffd')
		expect(user).to be_invalid
	end
end
