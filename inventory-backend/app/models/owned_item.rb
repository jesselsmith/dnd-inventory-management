class OwnedItem < ApplicationRecord
  belongs_to :character
  belongs_to :base_item
  has_many :slots, dependent: :destroy

  validates :notches, numericality: { greater_than_or_equal_to: 0, less_than_or_equal_to: 100 }
  validates :charges, numericality: { greater_than_or_equal_to: 0, less_than_or_equal_to: 50 }
end
