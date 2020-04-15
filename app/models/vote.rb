class Vote < ApplicationRecord
    belongs_to :votable, polymorphic: true

    belongs_to :voter,
        class_name: :User

    UPVOTE = 'up_vote'
    DOWNVOTE = 'down_vote'
    VOTE_TYPES = [UPVOTE, DOWNVOTE]
    
    def self.vote_types
        VOTE_TYPES
    end

    def opposite_vote_type
        case self.vote_type
            when UPVOTE
                "down_vote"
            when DOWNVOTE
                "up_vote"
            else
                nil
        end
    end

    def json_name
        self.votable_type.downcase
    end
end

