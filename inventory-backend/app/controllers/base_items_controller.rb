class BaseItemsController < ApplicationController
  def index
    render json: BaseItemSerializer.new(BaseItem.all)
  end 
end
