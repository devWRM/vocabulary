class Student < ApplicationRecord
    has_many :words, :dependent => :destroy
end
