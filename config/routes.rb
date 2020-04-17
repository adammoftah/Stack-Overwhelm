Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    
    resources :users, only: [:new, :create, :show]
    
    resources :questions, only: [:index, :show, :create, :update, :destroy] do
      member do
        post 'upvote'
        post 'downvote'
      end
      resources :answers, only: [:create]
    end

    resources :answers, only: [:show, :update, :destroy] do
      member do
        post 'upvote'
        post 'downvote'
      end
    end

    resource :session, only: [:create, :destroy]
  end


  root "static_pages#root"
end
