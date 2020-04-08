class Api::SessionsController < ApplicationController
    def create
        # debugger
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
        # debugger
        if @user
            # debugger
            login_user!(@user)
            render "api/users/show"
        else
            # debugger
            render json: ["The email or password is incorrect."], status: 401
        end
    end   

    def destroy
        @user = current_user
        if @user
            logout_user!
            render "api/users/show"
        else
            render json: ["Page not found"], status: 404
        end
    end

end #of class
