class Group < ApplicationRecord
  has_many :messages, dependent: :destroy
  has_many :users, through: :messages

  validates :name, presence: true
  # validates :users, uniqueness: { scope: :group } # , message: "can join only once" # NOT WKG
end
