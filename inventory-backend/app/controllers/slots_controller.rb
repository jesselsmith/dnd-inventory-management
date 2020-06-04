class SlotsController < ApplicationController
  def index
    if params[:character_id]
      render json: SlotSerializer.new(Character.find(params[:character_id]).orderedSlots)
    else
      render json: SlotSerializer.new(Slot.all)
    end
  end 

  def create
    parameters = slot_params(params)

    if( !parameters[:owned_item_id] && parameters[:base_item_id] )
      base_item = BaseItem.find(parameters[:base_item_id])
      item = OwnedItem.new(
        character_id: parameters[:character_id],
        base_item_id: parameters[:base_item_id],
        hasCharges: base_item.hasCharges,
        charges: base_item.charges
      )
      if item.save
        parameters[:owned_item_id] = item.id
      end
      parameters = parameters.except(:base_item_id)
    end

    slot = Slot.new(parameters)
    if slot.save
      render json: SlotSerializer.new(slot, { include: [:owned_item] })
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
    params.require(:slot).permit(:kind, :character_id, :owned_item_id, :base_item_id, :location)
  end

  def render_slot
    @slot = find_slot
    @options = { include: [:owned_item] }
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
