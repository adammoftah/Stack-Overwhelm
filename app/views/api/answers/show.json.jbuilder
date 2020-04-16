json.answer do
  json.set! @answer.id do
    json.extract! @answer, :id, :author_id, :question_id, :body, :score, :created_at
    json.score @answer.score
  end
end

json.user do
  json.set! @answer.author_id do
    json.extract! @answer.author, :id, :display_name
  end
end