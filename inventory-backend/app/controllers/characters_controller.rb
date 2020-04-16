class CharactersController < ApplicationController
  def index
    render json: CharacterSerializer.new(Character.all)
  end
  def show

  end

  def create
    character = Character.new(character_params(params))
    if character.save
      render json: CharacterSerializer.new(character)
    else
      render json: { message: 'There was an error in character creation' }
    end
  end

  def show
    render_character {}
  end

  def update
    render_character { 
      @character.update(character_params(params))
    }
  end

  def destroy
    render_character { @character.destroy }
  end

  private

  def character_params(params)
    params.require(:character).permit(:name, :strength)
  end

  def render_character
    @character = find_character
    @options = { include: [:slots, :owned_items] }
    if @character
      yield
      render json: CharacterSerializer.new(@character, @options)
    else
      render json: { message: 'That character could not be found' }
    end
  end

  def find_character
    Character.find_by(id: params[:id])
  end
end
