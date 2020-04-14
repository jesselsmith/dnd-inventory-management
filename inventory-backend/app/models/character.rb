class Character < ApplicationRecord
  has_many :owned_items
  has_many :slots

  def max_slots
    this.strength*2
  end

  def encumbered
    this.strength
  end

  def heavily_encumbered
    this.strength + 3
  end
  
end
