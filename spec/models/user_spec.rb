require 'rails_helper'

RSpec.describe User, :type => :model do
  
	describe "validations" do
		it "should have a valid factory" do
			u = FactoryGirl.build(:user)
			expect(u.save).to eq true
		end
		it { should have_and_belong_to_many(:events) }

		it { should validate_presence_of(:username) }
		it { should validate_presence_of(:name) }
		it { should validate_presence_of(:email) }
	end

	describe "test password authentication" do
	  it "should be able to set a password" do
	  	u = FactoryGirl.build(:user)
	  	expect(u.respond_to?(:password)).to eq true
	  end

	  it "should be able to authenticate" do 
	  	u = FactoryGirl.build(:user)
	  	u.password = "password"
	  	expect(u.authenticate("password")).to eq u
	  	expect(u.authenticate("wrongpassword")).to eq false
	  end
	end

	# it 'has a factory for user' do
	# 	expect(FactoryGirl.build(:user)).to be_valid
	# end

	# it 'is invalid without a username' do
	# 	user = FactoryGirl.build(:user, username: nil)
	# 	expect(user).to be_invalid
	# end

	# it 'is invalid without a name' do
	# 	user = FactoryGirl.build(:user, name: nil)
	# 	expect(user).to be_invalid
	# end

	# it 'is invalid without an email' do
	# 	user = FactoryGirl.build(:user, email: nil)
	# 	expect(user).to be_invalid
	# end

	# it 'is invalid if the email is not formatted properly' do
	# 	user = FactoryGirl.build(:user, email: 'cnjeanacoce')
	# 	expect(user).to be_invalid
	# end

	# it 'should have a password minimum length' do
	# 	user = FactoryGirl.build(:user, password: 'sdffd')
	# 	expect(user).to be_invalid
	# end
end
