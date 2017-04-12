class Book < ApplicationRecord
  validates :title, presence: true, uniqueness: { scope: [:name], message: "Cannot have the same title" }
  validates :author, presence: true, {scope: [:author], message: "Must have an author" }
  validates :genre, presence: true, {scope: [:genre], message: "Must have an genre" }
  validates :description, presence: true, {scope: [:description], message: "Must have an description" }
  validates :page_length, presence: true, { scope: [:page_length], message: "Please put in an integer" }

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

def self.top_five

end
