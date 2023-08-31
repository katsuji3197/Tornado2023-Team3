class CreateMatches < ActiveRecord::Migration[7.0]
  def change
    create_table :matches do |t|
      t.datetime :match_date
      t.string :meet_location

      t.timestamps
    end
  end
end
