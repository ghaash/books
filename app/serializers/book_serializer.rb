class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :author, :genre, :description, :page_length
  has_many :ratings
end
