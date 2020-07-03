class ChangeHasChargesToHasCharges < ActiveRecord::Migration[6.0]
  def change
    rename_column :base_items, :hasCharges, :has_charges
  end
end
