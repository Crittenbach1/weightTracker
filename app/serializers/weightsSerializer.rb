class WeightSerializer < ActiveModel::Serializer
  attributes :pounds, :currentDate, :person_id
  belongs_to :person
end
