class Slot < ApplicationRecord
  belongs_to :character
  belongs_to :owned_item
end
