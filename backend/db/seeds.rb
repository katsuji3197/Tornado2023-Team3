# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
User.create(name:"Ryo", email:"rryyoo52@gmail.com", sex:0, birthdate:"2004-01-17", hometown:"Tokyo", residence:"Kanagawa", job:"Engineer")
User.create(name:"Thomas", email:"tthomas@gmail.com", sex:1, birthdate:"2000-12-20", hometown:"Hokkaido", residence:"US", job:"Baby")
