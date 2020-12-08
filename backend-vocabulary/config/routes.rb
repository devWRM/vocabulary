Rails.application.routes.draw do
  resources :words
  resources :students do
    resources :words end


  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  get 'students/:id/words' => "words#index"

end
