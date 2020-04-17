class ModifyingVotesagain < ActiveRecord::Migration[5.2]
  def change
    drop_table :user_votes

    create_table :votes do |t|
      t.integer :user_id, null: false
      t.integer :value, null: false
      t.integer :votable_id, null: false
      t.string :votable_type, null: false

      t.timestamps
    end
    add_index :votes, :user_id
    add_index :votes, [:votable_type, :votable_id]
    add_index :votes, [:user_id, :votable_type, :votable_id], unique: true
  end
end
