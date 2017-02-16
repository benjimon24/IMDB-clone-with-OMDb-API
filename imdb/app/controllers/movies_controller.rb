class MoviesController < ApplicationController
  def index
  end

  def search
    root = "http://www.omdbapi.com/?s=#{params[:query]}&r=json"
    response = Net::HTTP.get(URI(root))
    parsed_response = JSON.parse(response)["Search"]
    # binding.pry
    if parsed_response
      render json: parsed_response
    else
      status 404
    end
  end

end
