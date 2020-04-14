class Character < ApplicationRecord
  has_many :owned_items
  has_many :slots

  def max_slots
    [this.strength*2, 9].max
  end

  def encumbered
    [this.strength, 9].max
  end

  def heavily_encumbered
    [this.encumbered + 3, max_slots].min
  end
  
end
