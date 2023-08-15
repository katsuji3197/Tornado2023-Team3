class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      #t.string :userId
      t.string :email, unique: true
      #t.string :username
      t.string :name
      #t.string :sex 
      t.integer :sex, default: 0
      t.date :birthdate
      t.string :hometown
      t.string :residence
      t.string :job

      t.timestamps
    end
  end
end
