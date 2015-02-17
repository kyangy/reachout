require 'rails_helper'

RSpec.describe Event, :type => :model do
  	describe "validations" do
		it "should have a valid factory" do
			e = FactoryGirl.build(:event)
			expect(e.save).to eq true
		end
		it { should have_and_belong_to_many(:users) }

		it { should validate_presence_of(:title) }
		it { should validate_presence_of(:description) }
		it { should validate_presence_of(:location) }
		it { should validate_presence_of(:goal) }
		it { should validate_presence_of(:date) }
		# it { should validate_presence_of(:image) }
	end
end
