class Container < ApplicationRecord
  belongs_to :character

  validates :name, presence: true
  validates :num_slots, numericality: { greater_than_or_equal_to: 0, less_than_or_equal_to: 100 }
end
