class AddLocationToSlots < ActiveRecord::Migration[6.0]
  def change
    add_column :slots, :location, :integer, null: false, default: 0
  end
end
