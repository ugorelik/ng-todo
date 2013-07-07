class CreateTableTodos < ActiveRecord::Migration
  def change
    create_table :todos do |t|
      t.text :content
      t.string :label
      t.boolean :is_complete, default: false
    end
  end
end
