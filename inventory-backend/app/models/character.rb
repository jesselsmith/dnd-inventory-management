class Character < ApplicationRecord
  has_many :owned_items, dependent: :destroy
  has_many :slots, dependent: :destroy
  has_many :containers, dependent: :destroy

  validates :name, presence: true
  validates :strength, presence: true, numericality: { greater_than_or_equal_to: 0, less_than_or_equal_to: 30 }


  def max_slots
    [self.strength*2, 9].max
  end

  def encumbered_limit
    [self.strength, 9].max
  end

  def heavily_encumbered_limit
    [self.encumbered_limit + 3, max_slots].min
  end
  
  def num_carried_items
    self.slots.where("kind = ?", 'carried').length
  end

  def encumberance
    if self.num_carried_items <= encumbered_limit
      'Unencumbered'
    elsif self.num_carried_items <= heavily_encumbered_limit
      'Encumbered'
    elsif self.num_carried_items <= max_slots
      'Heavily Encumbered'
    else
      'Over the Limit'
    end
  end

  def orderedSlots
    self.slots.order(:kind, :location)
  end
end
