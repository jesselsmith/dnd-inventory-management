class BaseItemsController < ApplicationController
  def index
    if search_params(params).empty?
      render json: BaseItemSerializer.new(BaseItem.alphabetical)
    else
      render json: BaseItemSerializer.new(BaseItem.filter_by_name(search_params(params)[:name]))
    end
  end 

  def create
    base_item = BaseItem.new(base_item_params(params))
    if base_item.save
      render json: BaseItemSerializer.new(base_item)
    else
      render json: { message: 'There was an error in base item creation' }
    end
  end

  private

  def search_params(params)
    params.permit(:name)
  end

  def base_item_params(params)
    params.require(:base_item).permit(:name, :image, :has_charges, :charges)
  end

end
