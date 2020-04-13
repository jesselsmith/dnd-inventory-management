class OwnedItem < ApplicationRecord
  belongs_to :character
  belongs_to :base_item
  has_many :slots
end
