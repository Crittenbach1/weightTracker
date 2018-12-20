class CreateArticlesTable < ActiveRecord::Migration[5.2]
  def change
    create_table :articles do |t|
      t.string :title
      t.string :url
      t.string :description
      t.string :author
    end
  end
end
