# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

seeds = [
  {
  :title => "Leviathan Wakes",
  :author => "James Corey",
  :genre => "Science Fiction",
  :description => "A Game Of Thrones in Space",
  :page_length => "582",
  :ratings_attributes => [:stars => 5]
  },

  {
  :title => "Death Troopers",
  :author => "Joe Schreiber",
  :genre => "Star Wars",
  :description => "Star Wars with zombies",
  :page_length => "288",
  :ratings_attributes => [:stars => 5]
  },
  {
  :title => "Mistborn: The Final Empire",
  :author => "Brandon Sanderson",
  :genre => "Fantasy",
  :description => "Magic via metal",
  :page_length => "600",
  :ratings_attributes => [:stars => 4]
  },
  {
  :title => "Sandstorm",
  :author => "James Rollins",
  :genre => "Speculative Fiction",
  :description => "Soldier spies with PHd's",
  :page_length => "608",
  :ratings_attributes => [:stars => 4]
  },
  {
  :title => "The Name of the Wind",
  :author => "Patrick Rothfuss",
  :genre => "Fantasy",
  :description => "A Game Of Thrones in Space",
  :page_length => "662",
  :ratings_attributes => [:stars => 5]
  }
]

seeds.each do |book|
  Book.create(book)
end
