class User < ApplicationRecord
    enum sex: { male: 0, female: 1, other: 2 }
end
#id|email|name|sex|birthdate|hometown|residence|job|created_at|updated_at
