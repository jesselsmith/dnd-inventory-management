class BaseItemsController < ApplicationController
  def index
    if search_params(params).empty?
      render json: BaseItemSerializer.new(BaseItem.all)
    else
      render json: BaseItemSerializer.new(BaseItem.filter_by_name(search_params(params)[:name]))
    end
  end 

  private

  def search_params(params)
    params.permit(:name)
  end

end
