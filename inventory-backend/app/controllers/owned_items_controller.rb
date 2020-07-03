class OwnedItemsController < ApplicationController
  def index
    if params[:character_id]
      render json: OwnedItemSerializer.new(Character.find(params[:character_id]).owned_items)
    else
      render json: OwnedItemSerializer.new(OwnedItem.all)
    end
  end 

  def create
    owned_item = OwnedItem.new(owned_item_params(params))
    if owned_item.save
      render json: OwnedItemSerializer.new(owned_item)
    else
      render json: { message: 'There was an error in owned_item creation' }
    end
  end

  def show
    render_owned_item {}
  end

  def update
    render_owned_item { 
      @owned_item.update(owned_item_params(params))
    }
  end

  def destroy
    render_owned_item { @owned_item.destroy }
  end

  private

  def owned_item_params(params)
    params.require(:owned_item).permit(:notches, :character_id, :base_item_id, :has_charges, :charges)
  end

  def render_owned_item
    @owned_item = find_owned_item
    @options = {}
    if @owned_item
      yield
      render json: OwnedItemSerializer.new(@owned_item, @options)
    else
      render json: { message: 'That owned_item could not be found' }
    end
  end

  def find_owned_item
    OwnedItem.find_by(id: params[:id])
  end
end
