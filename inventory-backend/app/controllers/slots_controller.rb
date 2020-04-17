class SlotsController < ApplicationController
  def index
    render json: SlotSerializer.new(Slot.all)
  end 

  def create
    slot = Slot.new(slot_params(params))
    if slot.save
      render json: SlotSerializer.new(slot)
    else
      render json: { message: 'There was an error in slot creation' }
    end
  end

  def show
    render_slot {}
  end

  def update
    render_slot { 
      @slot.update(slot_params(params))
    }
  end

  def destroy
    render_slot { @slot.destroy }
  end

  private

  def slot_params(params)
    params.require(:slot).permit(:kind, :character_id, :owned_item_id)
  end

  def render_slot
    @slot = find_slot
    @options = { include: [:slots, :owned_items] }
    if @slot
      yield
      render json: SlotSerializer.new(@slot, @options)
    else
      render json: { message: 'That slot could not be found' }
    end
  end

  def find_slot
    Slot.find_by(id: params[:id])
  end
end