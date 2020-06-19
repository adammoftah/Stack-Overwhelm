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
        if params[:searchTerm]
            args = params[:searchTerm].split(" ")
            @questions = []
            args.each do |arg| 
                @questions.concat(Question.where("lower(title) LIKE ?", "%#{arg.downcase}%"))
            end
        else
            @questions = Question.all
        end
        @users = User.all
        render :index
    end

    def show
        @question = Question.find(params[:id])
        @author = User.find_by(id: @question.author_id)
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

    def downvote
        vote(-1)
    end

    def upvote
        vote(1)
    end

    def search
        @users = User.all
        args = params[:args].split(" ")
        @questions = []
        args.each do |arg| 
            @questions.concat(Question.where("lower(title) LIKE ?", "%#{arg.downcase}"))
        end
        render :index
    end

    private 

    def question_params 
        params.require(:question).permit(:title, :body)
    end

    def vote(direction)
        @question = Question.find(params[:id])
        @vote = @question.votes.find_or_initialize_by(user: current_user)
        @vote.update(value: direction)

        render :show
    end
end
