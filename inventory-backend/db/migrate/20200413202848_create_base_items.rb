class CreateBaseItems < ActiveRecord::Migration[6.0]
  def change
    create_table :base_items do |t|
      t.string :name, null: false
      t.string :category, null: false, default: "Adventuring Gear"
      t.integer :slots, null: false, default: 1
      t.string :image
      t.integer :contained_slots, null: false, default: 0

      t.timestamps
    end
  end
end
