class Book < ApplicationRecord
  belongs_to :author
  accepts_nested_attributes_for :authors, :books

end
