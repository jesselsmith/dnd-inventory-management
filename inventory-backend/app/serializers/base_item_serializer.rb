class BaseItemSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :category, :slots, :image, :contained_slots, :has_charges, :charges
end
