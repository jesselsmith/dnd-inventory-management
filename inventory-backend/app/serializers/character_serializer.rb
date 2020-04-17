class CharacterSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :strength, :encumbered_limit, :heavily_encumbered_limit, 
    :max_slots, :num_carried_items, :encumberance  
  has_many :slots
  has_many :owned_items
end
