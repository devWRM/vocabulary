class Student < ApplicationRecord
    has_many :words, :dependent => :destroy

    # has_many :words, :dependent => :delete_all  
end
