class Api::AnswersController < ApplicationController
     before_action :ensure_logged_in, only: [:create]

    def create 
        @answer = Answer.new(answer_params)
        @answer.author_id = current_user.id
        @answer.question_id = params[:question_id]
        
        if @answer.save 
            render :show
        else
            render json: @answer.errors.full_messages, status: 422
        end
    end

    def show
        @answer = Answer.find(params[:id])
        @author = User.find_by(id: @answer.author_id)
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

    def downvote
        vote(-1)
    end

    def upvote
        vote(1)
    end

    private 

    def answer_params 
        params.require(:answer).permit(:body)
    end

    def vote(direction)
        @answer = Answer.find(params[:id])
        @vote = @answer.vote.find_or_initialize_by(user: current_user)

        unless @vote.update(value: direction)
            flash[:errors] = @vote.errors.full_messages
        end

        render :show
    end

end
