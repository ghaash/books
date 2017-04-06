class Book < ApplicationRecord
  belongs_to :author, required: false
end
