class Match < ApplicationRecord
  has_many :matched_users
  has_many :users, through: :matched_users
end
