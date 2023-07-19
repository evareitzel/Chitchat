# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


puts "Seeding Users..."
User.create([
  { username: 'Momo', password: '1' },
  { username: 'Opie', password: '2' }
])

puts "Seeding Groups..."
Group.create([
  { name: 'Mondays' },
  { name: 'Anti Establishment' }
])

puts "Seeding Messages..."
Message.create([
  { text: "Somebody's got a case of the Mondays 😕", time: '2023-06-18 01:00:00 UTC', group_id: Group.first.id, user_id: User.first.id },
  { text: "Anyone else not a fan of consistency?", time: '2023-06-18 11:00:00 UTC', group_id: Group.second.id, user_id: User.second.id }
])

puts "Seeding Reactions..."
Reaction.create([
  { emotion: '❤️', message_id: Message.first.id, user_id: User.second.id },
  { emotion: '🤙', message_id: Message.second.id, user_id: User.first.id }
])

puts "Done seeding! 👍"
