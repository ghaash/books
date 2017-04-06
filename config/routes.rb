Rails.application.routes.draw do
  # resources :ratings
  # resources :authors
  # resources :books

  resources :books, only: [:show, :index, :new, :create, :edit] do
  resources :authors, only: [:show, :index, :new] do
    resources :ratings, only: [:show, :index, :new]
  end
end

  root to: "books#index"


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
