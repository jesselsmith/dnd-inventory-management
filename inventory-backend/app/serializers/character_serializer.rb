class CharacterSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :strength, :encumbered_limit, :heavily_encumbered_limit, :max_slots
  has_many :slots
  has_many :owned_items
end
