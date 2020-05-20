class ContainerSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :num_slots
end
