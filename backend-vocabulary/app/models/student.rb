class Student < ApplicationRecord
    has_many :words, :dependent => :destroy

    validates :name, :nickname, :email, presence: true

    # has_many :words, :dependent => :delete_all 

    # dependent::destroy 
    # dependent::delete_all
end
