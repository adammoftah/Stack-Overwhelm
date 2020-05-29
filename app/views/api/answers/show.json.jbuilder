json.answer do
  json.set! @answer.id do
    json.extract! @answer, :id, :author_id, :question_id, :body, :created_at
    json.votes do 
      @answer.votes.each do |vote|
        json.set! vote.id do
          json.userId vote.user_id
          json.votableId vote.votable_id
          json.votableType vote.votable_type
          json.value vote.value
        end
      end
    end
  end
end

json.author do
    json.set! @answer.author_id do
        json.extract! @answer.author, :id, :display_name
    end
end



