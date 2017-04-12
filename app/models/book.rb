class Book < ApplicationRecord
  validates :title, presence: true, uniqueness: { scope: [:title], message: "Cannot have the same title" }
  validates :author, presence: true
  validates :genre, presence: true
  validates :description, presence: true
  validates :page_length, presence: true

  has_many :ratings

  def ratings_attributes=(ratings_attributes)
    ratings_attributes.each do |i, ratings_attributes|
      self.ratings.build(ratings_attributes)
    end
  end

  def self.by_rating(rating_id)
  where(rating: rating_id)
end

  def self.from_today
  where("created_at >=?", Time.zone.today.beginning_of_day)
end

def self.old_news
  where("created_at <?", Time.zone.today.beginning_of_day)
end


end
