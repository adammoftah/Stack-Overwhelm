json.question do
    json.partial! '/api/questions/question', question: @question
end

json.authors do
    json.set! @question.author.id do
        json.extract! @question.author, :id, :display_name
    end
end

json.answers do
    @question.answers.each do |answer|
        json.set! answer.id do
            json.extract! answer, :id, :author_id, :question_id, :body, :score, :created_at
        end
    end
end
