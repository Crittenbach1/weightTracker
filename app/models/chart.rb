class Chart < ActiveRecord::Base
   has_many :people
   has_many :weights, through: :people
   accepts_nested_attributes_for :people

end
