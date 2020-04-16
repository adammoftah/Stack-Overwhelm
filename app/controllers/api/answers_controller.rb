class Api::AnswersController < ApplicationController
     before_action :ensure_logged_in, only: [:create]

    def create 
        @answer = Answer.new(answer_params)
        @answer.author_id = current_user.id
        @answer.question_id = params[:question_id]
        
        if @answer.save 
            render "api/answers/show"
        else
            render json: @answer.errors.full_messages, status: 422
        end
    end

    def show
        @answer = Answer.find(params[:id])
        render :show
    end

    def update
        @answer = current_user.answers.find(params[:id])
        
        if @answer.update(answer_params)
            render :show
        else
            render json: @answer.errors.full_messages, status: 422
        end
    end

    def destroy
        @answer = Answer.find(params[:id])

        if @answer.destroy 
            render :show
        else
            render json: @answer.errors.full_messages, status: 422
        end
    end

    private 

    def answer_params 
        params.require(:answer).permit(:body)
    end
end
