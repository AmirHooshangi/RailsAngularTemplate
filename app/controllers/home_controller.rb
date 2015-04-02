class HomeController < ApplicationController

  def index
  end


  def jstemplate
    render template: "angular/#{params[:path]}", layout: nil
  end

end
