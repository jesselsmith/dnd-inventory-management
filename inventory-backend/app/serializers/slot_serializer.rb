class SlotSerializer
  include FastJsonapi::ObjectSerializer
  attributes :kind, :location
  belongs_to :character
  belongs_to :owned_item
end
