module Votable
  extend ActiveSupport::Concern

  included do
    has_many :votes, as: :votable, dependent: :destroy
    has_many :voters, through: :votes
  end

  def addVote(vote)
    case vote.vote_type
      when "up_vote"
        self.update(score: self.score + 1)
      when "down_vote"
        self.update(score: self.score - 1)
      else
        return
      end
  end

  def undoVote(vote)
    case vote.vote_type
      when "up_vote"
        self.update(score: self.score - 1)
      when "down_vote"
        self.update(score: self.score + 1)
      else
        return      
      end
  end
end