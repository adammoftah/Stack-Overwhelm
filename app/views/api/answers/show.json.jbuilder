json.answer do
  json.set! @answer.id do
    json.extract! @answer, :id, :author_id, :question_id, :body, :created_at
  end
end

json.author do
    json.set! @answer.author_id do
        json.extract! @answer.author, :id, :display_name
    end
end

