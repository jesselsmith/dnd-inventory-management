class CreateBaseItems < ActiveRecord::Migration[6.0]
  def change
    create_table :base_items do |t|
      t.string :name
      t.string :category
      t.integer :slots
      t.string :image
      t.integer :contained_slots

      t.timestamps
    end
  end
end
