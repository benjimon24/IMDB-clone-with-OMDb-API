Rails.application.routes.draw do
  root 'movies#index'
  get 'movies/search/:keyword', to: 'movies#search'
end
