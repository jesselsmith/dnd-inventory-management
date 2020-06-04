class BaseItem < ApplicationRecord
  has_many :owned_items, dependent: :destroy

  scope :filter_by_name, -> (name) { where("name like ?", "%#{name}%")}
end
