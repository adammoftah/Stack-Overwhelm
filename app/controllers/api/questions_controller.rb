class Api::QuestionsController < ApplicationController
    before_action :ensure_logged_in, only: [:create]

    def create 
        @question = Question.new(question_params)
        @question.author_id = current_user.id
        
        if @question.save 
            render "api/questions/show"
        else
            render json: @question.errors.full_messages, status: 422
        end
    end

    def index 
        @questions = Question.all
        @users = User.all
        render :index
    end

    def show
        @question = Question.find(params[:id])
        render :show
    end

    def update
        @question = current_user.questions.find(params[:id])
        
        if @question.update(question_params)
            render :show
        else
            render json: @question.errors.full_messages, status: 422
        end
    end

    def destroy
        @question = Question.find(params[:id])

        if @question.destroy 
            render :show
        else
            render json: @question.errors.full_messages, status: 422
        end
    end

    private 

    def question_params 
        params.require(:question).permit(:title, :body)
    end
end
