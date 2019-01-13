Rails.application.routes.draw do
    root to: 'site#index'

    namespace :api do
      namespace :v1 do
       resources :persons, only: [:index, :show, :create, :destroy, :update]
       resources :weights, only: [:index, :show, :create, :destroy, :update]
      end
    end

  end
