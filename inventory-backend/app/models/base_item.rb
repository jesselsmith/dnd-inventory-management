class BaseItem < ApplicationRecord
  has_many :owned_items, dependent: :destroy

  validates :name, presence: true, uniqueness: true
  validates :charges, numericality: { greater_than_or_equal_to: 0, less_than_or_equal_to: 50 }
  validates :slots, numericality: { greater_than_or_equal_to: 1, less_than_or_equal_to: 10 }
  validates :contained_slots, numericality: { greater_than_or_equal_to: 0, less_than_or_equal_to: 100 }

  scope :filter_by_name, -> (name) { where("name ILIKE ?", "%#{name}%").order(:name) }

  def self.alphabetical
    BaseItem.all.order(:name)
  end
end
