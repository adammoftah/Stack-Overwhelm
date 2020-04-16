class Fixanswers < ActiveRecord::Migration[5.2]
  def change
    drop_table :answers

    create_table :answers do |t|
      t.integer :author_id, null: false
      t.integer :question_id, null: false
      t.integer :score, default: 0
      t.string :body, null: false
      t.timestamps
    end
    add_index :answers, :author_id
    add_index :answers, :question_id
  end

end
