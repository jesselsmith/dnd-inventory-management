class ContainersController < ApplicationController
  def index
    if params[:character_id]
      render json: ContainerSerializer.new(Character.find(params[:character_id]).containers)
    else
      render json: ContainerSerializer.new(Container.all)
    end
  end 

  def create
    container = Container.new(container_params(params))
    if container.save
      render json: ContainerSerializer.new(container)
    else
      render json: { message: 'There was an error in container creation' }
    end
  end

  def show
    render_container {}
  end

  def update
    render_container { 
      @container.update(container_params(params))
    }
  end

  def destroy
    render_container { @container.destroy }
  end

  private

  def container_params(params)
    params.require(:container).permit(:name, :num_slots, :character_id)
  end

  def render_container
    @container = find_container
    if @container
      yield
      render json: ContainerSerializer.new(@container)
    else
      render json: { message: 'That Container could not be found' }
    end
  end

  def find_container
    Container.find_by(id: params[:id])
  end
end
