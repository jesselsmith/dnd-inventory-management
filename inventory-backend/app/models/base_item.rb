class BaseItem < ApplicationRecord
  has_many :owned_items, dependent: :destroy
end
