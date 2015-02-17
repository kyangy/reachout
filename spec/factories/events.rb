FactoryGirl.define do
  factory :event do
    title { Faker::Name.title }
	description { Faker::Lorem.paragraph }
	goal { Faker::Number.digit }
	location "#{Faker::Address.city}, #{Faker::Address.state}"
	date { Faker::Date.forward(23) }
	image "some image path"
  end

end
