class Answer < ApplicationRecord
    include Votable

    belongs_to :author,
        foreign_key: :author_id,
        class_name: :User
end
