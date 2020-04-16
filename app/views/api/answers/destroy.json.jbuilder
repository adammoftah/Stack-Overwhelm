json.answer do
  json.extract! @answer, :id, :author_id, :question_id, :body
  json.score @answer.score
end