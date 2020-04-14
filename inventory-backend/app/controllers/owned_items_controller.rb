class OwnedItemsController < ApplicationController
  def index
    render json: OwnedItemSerializer.new(OwnedItem.all)
  end 
end
