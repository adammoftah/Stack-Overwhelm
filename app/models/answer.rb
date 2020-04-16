class Answer < ApplicationRecord
    # include Voteable

    belongs_to :author,
        foreign_key: :author_id,
        class_name: :User
end
