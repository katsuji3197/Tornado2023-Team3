# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 20_230_831_082_238) do
  create_table 'matched_users', charset: 'utf8mb4', collation: 'utf8mb4_0900_ai_ci', force: :cascade do |t|
    t.bigint 'match_id', null: false
    t.bigint 'user_id', null: false
    t.string 'status'
    t.datetime 'created_at', null: false
    t.datetime 'updated_at', null: false
    t.index ['match_id'], name: 'index_matched_users_on_match_id'
    t.index ['user_id'], name: 'index_matched_users_on_user_id'
  end

  create_table 'matches', charset: 'utf8mb4', collation: 'utf8mb4_0900_ai_ci', force: :cascade do |t|
    t.datetime 'match_date'
    t.string 'meet_location'
    t.datetime 'created_at', null: false
    t.datetime 'updated_at', null: false
  end

  create_table 'users', charset: 'utf8mb4', collation: 'utf8mb4_0900_ai_ci', force: :cascade do |t|
    t.string 'provider', default: 'email', null: false
    t.string 'uid', default: '', null: false
    t.string 'encrypted_password', default: '', null: false
    t.string 'reset_password_token'
    t.datetime 'reset_password_sent_at'
    t.boolean 'allow_password_change', default: false
    t.integer 'sign_in_count', default: 0, null: false, comment: 'ログイン回数'
    t.datetime 'current_sign_in_at', comment: '現在のログイン日時'
    t.datetime 'last_sign_in_at', comment: '前回のログイン日時'
    t.string 'current_sign_in_ip', comment: '現在のログインIP'
    t.string 'last_sign_in_ip', comment: '前回のログインIP'
    t.datetime 'remember_created_at'
    t.string 'confirmation_token'
    t.datetime 'confirmed_at'
    t.datetime 'confirmation_sent_at'
    t.string 'unconfirmed_email'
    t.string 'first_name', default: '', null: false, comment: '名'
    t.string 'last_name', default: '', null: false, comment: '姓'
    t.string 'name', default: '', null: false, comment: '名前'
    t.string 'email', default: '', null: false, comment: 'メールアドレス'
    t.integer 'sex', comment: '性別'
    t.date 'birthdate', comment: '生年月日'
    t.integer 'hometown', comment: '出身地'
    t.integer 'residence', comment: '居住地'
    t.string 'occupation', comment: '職業'
    t.integer 'major', comment: '専攻'
    t.integer 'mbti', comment: 'MBTI'
    t.string 'image', comment: 'プロフィール写真'
    t.text 'introduction', comment: '自己紹介'
    t.text 'tokens'
    t.datetime 'created_at', null: false
    t.datetime 'updated_at', null: false
    t.index ['confirmation_token'], name: 'index_users_on_confirmation_token', unique: true
    t.index ['email'], name: 'index_users_on_email', unique: true
    t.index ['reset_password_token'], name: 'index_users_on_reset_password_token', unique: true
    t.index %w[uid provider], name: 'index_users_on_uid_and_provider', unique: true
  end

  add_foreign_key 'matched_users', 'matches'
  add_foreign_key 'matched_users', 'users'
end
