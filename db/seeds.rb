# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

books = [{
  :title=>"Leviathan Wakes",
  :author=>"James Corey",
  :genre=>"Science Fiction",
  :description=>"A Game Of Thrones in Space",
  :page_length=>"600",
  :ratings_attributes =>{"0"=>{:stars=>"11"}}},

  :title=>"Death Troopers",
  :author=>"Joe Schreiber",
  :genre=>"Star Wars",
  :description=>"Star Wars with zombies!",
  :page_length=>"272",
  :ratings_attributes =>{"1"=>{:stars=>"7"}}},

  :title=>"Mistborn Series",
  :author=>"Brandon Sanderson",
  :genre=>"Fantasy",
  :description=>"Magic with metals",
  :page_length=>"1200",
  :ratings_attributes =>{"2"=>{:stars=>"10"}}},

  :title=>"Sigma Force Series",
  :author=>"James Rollins",
  :genre=>"Spy Tech Thriller",
  :description=>"Soldiers with PHds",
  :page_length=>"500",
  :ratings_attributes =>{"3"=>{:stars=>"8"}}},

  :title=>"The Kingkiller Chronicles",
  :author=>"Patrick Rothfuss",
  :genre=>"Fantasy",
  :description=>"The most compelling fantasy you have ever read",
  :page_length=>"900",
  :ratings_attributes =>{"4"=>{:stars=>"11"}}}
]

books.each do |book|
  Book.create(book)
end
