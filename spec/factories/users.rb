FactoryGirl.define do
  factory :user do
    username { Faker::Internet.user_name }
	name { Faker::Name.name }
	email { Faker::Internet.email }
	password "password"
  end

end
