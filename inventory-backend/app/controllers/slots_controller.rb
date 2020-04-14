class SlotsController < ApplicationController
  def index
    render json: SlotSerializer.new(Slot.all)
  end 
end
