class CreateVotes < ActiveRecord::Migration[5.2]
  def change
    create_table :votes do |t|
      t.integer :voter_id, null: false
      t.references :votable, polymorphic: true, index: true
      t.string :vote_type, null: false
      t.timestamps
    end
  end
end