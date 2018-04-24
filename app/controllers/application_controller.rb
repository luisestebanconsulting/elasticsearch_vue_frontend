#
#   app/controllers/application_controller.rb   - elasticsearch_vue_frontend
#
#     Luis Esteban    24 April 2018
#       created
#

 class ApplicationController < ActionController::Base

  ##
  # SPA Frontend Renderer to elasticsearch_vue API

  def main
    respond_to do |format|
      format.html
      format.js
      format.json
    end
  end

end
