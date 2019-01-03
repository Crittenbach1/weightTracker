class CreateWeights < ActiveRecord::Migration[5.2]
  def change
    create_table :weights do |t|
      t.string :pounds
      t.string :currentDate
    end
  end
end
