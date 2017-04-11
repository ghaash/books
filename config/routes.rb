Rails.application.routes.draw do
  devise_for :users, :controllers => { :omniauth_callbacks => "users/omniauth_callbacks" }
  resources :ratings
  resources :books

  resources :books, only: [:show, :index, :new, :create, :edit] do
  resources :ratings, only: [:show, :index, :new]
  end


  root to: "books#index"


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
