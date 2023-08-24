class User < ApplicationRecord
	devise :database_authenticatable, :registerable,
					:recoverable, :rememberable, :trackable, :validatable,
					:confirmable, :omniauthable
	include DeviseTokenAuth::Concerns::User
	enum sex: { male: 0, female: 1, other: 2 }
end
