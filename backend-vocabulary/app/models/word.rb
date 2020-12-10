class Word < ApplicationRecord
    belongs_to :student

    validates :spelling, :pos, :definition, :sentence, presence: true

end
