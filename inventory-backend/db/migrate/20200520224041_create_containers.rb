class CreateContainers < ActiveRecord::Migration[6.0]
  def change
    create_table :containers do |t|
      t.string :name
      t.integer :num_slots
      t.references :character, null: false, foreign_key: true
      t.timestamps
    end
  end
end
