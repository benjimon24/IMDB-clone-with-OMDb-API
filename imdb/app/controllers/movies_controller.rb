class MoviesController < ApplicationController
  def index
  end

  def search
    root = "http://www.omdbapi.com/?s=#{params[:query]}&r=json"
    response = Net::HTTP.get(URI(root))
    parsed_response = JSON.parse(response)["Search"]
    if parsed_response
      render json: parsed_response
    else
      status 404
    end
  end

  def show
    root = "http://www.omdbapi.com/?i=#{params[:movie_id]}&r=json"
    response = Net::HTTP.get(URI(root))
    @parsed_response = JSON.parse(response)
  end
end
