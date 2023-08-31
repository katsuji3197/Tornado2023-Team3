class DeviseTokenAuthCreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table(:users) do |t|
      ## Required
      t.string :provider, null: false, default: 'email'
      t.string :uid, null: false, default: ''

      ## Database authenticatable
      t.string :encrypted_password, null: false, default: ''

      ## Recoverable
      t.string   :reset_password_token
      t.datetime :reset_password_sent_at
      t.boolean  :allow_password_change, default: false

      ## Trackable
      t.integer  :sign_in_count, default: 0, null: false, comment: 'ログイン回数'
      t.datetime :current_sign_in_at, comment: '現在のログイン日時'
      t.datetime :last_sign_in_at, comment: '前回のログイン日時'
      t.string   :current_sign_in_ip, comment: '現在のログインIP'
      t.string   :last_sign_in_ip, comment: '前回のログインIP'

      ## Rememberable
      t.datetime :remember_created_at

      ## Confirmable
      t.string   :confirmation_token
      t.datetime :confirmed_at
      t.datetime :confirmation_sent_at
      t.string   :unconfirmed_email # Only if using reconfirmable

      ## Lockable
      # t.integer  :failed_attempts, :default => 0, :null => false # Only if lock strategy is :failed_attempts
      # t.string   :unlock_token # Only if unlock strategy is :email or :both
      # t.datetime :locked_at

      ## User Info
      t.string  :first_name,  null: false, default: '', comment: '名'
      t.string  :last_name,   null: false, default: '', comment: '姓'
      t.string  :name,        null: false, default: '', comment: '名前'
      t.string  :email,       null: false, default: '', comment: 'メールアドレス'
      t.integer :sex,                                   comment: '性別'
      t.date    :birthdate,                             comment: '生年月日'
      t.integer :hometown,                              comment: '出身地'
      t.integer :residence,                             comment: '居住地'
      t.string  :occupation,                            comment: '職業'
      t.integer :major,                                 comment: '専攻'
      t.integer :mbti,                                  comment: 'MBTI'
      t.string  :image,                                 comment: 'プロフィール写真'
      t.text    :introduction,                          comment: '自己紹介'

      ## Tokens
      t.text :tokens

      t.timestamps
    end

    add_index :users, :email, unique: true
    add_index :users, %i[uid provider], unique: true
    add_index :users, :reset_password_token, unique: true
    add_index :users, :confirmation_token,   unique: true
    # add_index :users, :unlock_token,         unique: true
  end
end
