class ChangeHasChargesToHasChargesForOwnedItems < ActiveRecord::Migration[6.0]
  def change
    rename_column :owned_items, :hasCharges, :has_charges
  end
end
