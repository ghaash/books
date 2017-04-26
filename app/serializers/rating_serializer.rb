class RatingSerializer < ActiveModel::Serializer
  attributes :id, :stars
  belongs_to :book
end
