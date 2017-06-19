Rails.application.routes.draw do
  root 'movies#index'
  get 'movies/search/:keyword', to: 'movies#search'
  get 'movies/:movie_id', to: 'movies#show'
end
