require 'date'

10.times do |n|
  birthdate = Date.new(1999, n + 1, 1)
  User.create!(
    first_name: 'テスト',
    last_name: "ユーザー#{n + 1}",
    name: "テストユーザー#{n + 1}",
    birthdate:,
    email: "test+#{n + 1}@example.com",
    password: 'password',
    password_confirmation: 'password'
  )
end
