class CharacterController < ApplicationController
  def index
    render json: CharacterSerializer.new(Character.all)
  end 
end
