class OwnedItemSerializer
  include FastJsonapi::ObjectSerializer
  attributes :notches, :base_item
  belongs_to :character
  belongs_to :base_item
  has_many :slots
end
