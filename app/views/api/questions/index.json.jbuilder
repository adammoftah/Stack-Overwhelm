num_answers = 0
json.questions do 
	@questions.each do |question| 
		json.set! question.id do 
			json.partial! "api/questions/question", question: question
			question.votes.each do |vote|
				json.set! vote.id do
					json.userId vote.user_id
					json.votableId vote.votable_id
					json.votableType vote.votable_type
					json.value vote.value
				end
			end
			num_answers = 0
			question.answers.each do |answer|
				num_answers += 1
			end
			json.numAnswers num_answers
		end
	end
end

json.users do  
	@users.each do |user|
		json.set! user.id  do 
			json.partial! "api/users/user", user: user
		end 
	end
end 

json.votes do 
  @questions.each do |question|
    question.votes.each do |vote|
			json.set! vote.id do
				json.userId vote.user_id
				json.votableId vote.votable_id
				json.votableType vote.votable_type
				json.value vote.value
			end
    end
	end
end
