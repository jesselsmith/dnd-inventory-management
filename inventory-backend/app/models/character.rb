class Character < ApplicationRecord
  has_many :owned_items
  has_many :slots
end
