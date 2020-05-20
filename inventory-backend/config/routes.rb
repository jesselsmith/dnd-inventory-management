Rails.application.routes.draw do
  
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  resources :base_items, defaults: { format: :json }
  resources :characters, defaults: { format: :json } do
    resources :slots, defaults: { format: :json }
    resources :owned_items, defaults: {format: :json }
    resources :containers, defaults: { format: :json }
  end
  resources :owned_items, defaults: { format: :json }
  resources :slots, defaults: { format: :json }
  resources :containers, defaults: { format: :json }
end
