class Slot < ApplicationRecord
  belongs_to :character
  belongs_to :owned_item

  validates :location, uniqueness: { scope: :kind }, numericality: { greater_than_or_equal_to: 0, less_than_or_equal_to: 100 }
end
