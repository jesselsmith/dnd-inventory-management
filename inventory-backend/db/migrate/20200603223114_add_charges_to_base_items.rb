class AddChargesToBaseItems < ActiveRecord::Migration[6.0]
  def change
    add_column :base_items, :hasCharges, :boolean, default: false, null: false
    add_column :base_items, :charges, :integer, default: 0, null: false
    add_column :owned_items, :hasCharges, :boolean, default: false, null: false
  end
end
