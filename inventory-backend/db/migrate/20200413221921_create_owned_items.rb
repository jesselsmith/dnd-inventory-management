class CreateOwnedItems < ActiveRecord::Migration[6.0]
  def change
    create_table :owned_items do |t|
      t.references :character, null: false, foreign_key: true
      t.references :base_item, null: false, foreign_key: true
      t.integer :notches, null: false, default: 0

      t.timestamps
    end
  end
end
