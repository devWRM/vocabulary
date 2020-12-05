class CreateWords < ActiveRecord::Migration[6.0]
  def change
    create_table :words do |t|
      t.string :spelling
      t.string :pos
      t.text :definition
      t.text :sentence
      t.belongs_to :student

      t.timestamps
    end
  end
end
