# json.question do
#     json.partial! '/api/questions/question', question: @question
# end

# json.authors do
#     json.set! question.author.id do
#         json.extract! question.author, :id, :display_name
#     end
# end

# @question.reviews.includes(:author).each do |review|
#     json.reviews do
#         json.set! review.id do
#             json.partial! 'api/reviews/review', review: review
#         end
#     end
# end
