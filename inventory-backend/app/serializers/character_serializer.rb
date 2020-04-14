class CharacterSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :strength, :encumbered, :heavily_encumbered, :max_slots
  has_many :slots
  has_many :owned_items
end
