class Rating < ApplicationRecord
  validates :stars, presence: true

  belongs_to :book

end
