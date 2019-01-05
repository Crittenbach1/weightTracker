Rails.application.routes.draw do
    root to: 'site#index'

    namespace :api do
      namespace :v1 do
        resources :persons, :weights
        
        resources :persons do
          resource :weights
        end
      end
    end
  end
