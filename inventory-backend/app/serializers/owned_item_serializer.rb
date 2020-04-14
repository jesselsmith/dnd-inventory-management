class OwnedItemSerializer
  include FastJsonapi::ObjectSerializer
  attributes :notches
  belongs_to :character
  belongs_to :base_item
end
