NgTodo::Application.routes.draw do
  root to: 'pages#show'
  resources :todos
  resource :pages, only: :show
end
