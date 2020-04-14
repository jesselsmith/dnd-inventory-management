class SlotSerializer
  include FastJsonapi::ObjectSerializer
  attributes :kind
  belongs_to :character
  belongs_to :owned_item
end
