FactoryGirl.define do
  factory :event do
    title { Faker::Name.title }
	description { Faker::Lorem.paragraph }
	goal { Faker::Number.digit }
	location "#{Faker::Address.city}, #{Faker::Address.state}"
	duration { Faker::Date.forward(23) }
	image { Faker::Avatar.image }
  end

end
