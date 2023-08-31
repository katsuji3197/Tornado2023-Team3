Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :test, only: %i[index]

      mount_devise_token_auth_for 'User', at: 'auth', skip: %i[omniauth_callbacks], controllers: {
        registrations: 'api/v1/auth/registrations'
      }

      namespace :auth do
        resources :sessions, only: %i[index]
      end

      resources :users, only: %i[index show update destroy]
      resources :matches, only: %i[create] do
        collection do
          post :find_match
        end
      end
      resources :matched_users, only: %i[create update]
    end
  end
end
