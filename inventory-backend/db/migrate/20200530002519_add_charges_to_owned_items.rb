class AddChargesToOwnedItems < ActiveRecord::Migration[6.0]
  def change
    add_column :owned_items, :charges, :integer, default: 0, null: false
  end
end
