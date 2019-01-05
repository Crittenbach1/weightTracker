class PersonSerializer < ActiveModel::Serializer
  #attributes :name
  has_many :weights #, include_nested_associations: true


end
