class Person < ActiveRecord::Base
   has_many :weights
   accepts_nested_attributes_for :weights
   validates :name, :uniqueness => true
end
