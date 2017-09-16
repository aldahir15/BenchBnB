class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(user_params[:username], user_params[:password])
    if @user
      login(@user)
      render :show
    else
      render json: "invalid login credentials", status: 422
    end
  end

  def destroy
    if current_user
      logout
    else
      render :json => {:error => "NOT-FOUND"}.to_json, :status => 404
    end
  end
end
