class CreateSlots < ActiveRecord::Migration[6.0]
  def change
    create_table :slots do |t|
      t.string :kind, null: false, default: "carried"
      t.references :character, null: false, foreign_key: true
      t.references :owned_item, null: false, foreign_key: true

      t.timestamps
    end
  end
end
