class Student < ActiveRecord::Base
    belongs_to :school
    has_many :appointments
    has_many :teachers, through: :appointments


    def print 
        puts "Name: #{self.name}"
        puts "Age: #{self.age}"
        puts "Gender: #{self.gender}"
        puts "Phone number #{self.phone}"
    end 
end