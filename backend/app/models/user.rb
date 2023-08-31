class User < ApplicationRecord
	devise :database_authenticatable, :registerable,
					:recoverable, :rememberable, :trackable, :validatable,
					:omniauthable
	include DeviseTokenAuth::Concerns::User

	has_many :matched_users, dependent: :destroy
	has_many :matches, through: :matched_users

	enum sex: { male: 0, female: 1, other: 2 }
end
