class Group < ApplicationRecord
  has_many :messages, dependent: :destroy
  has_many :users, through: :messages

  validates :name, presence: true
  # validates :user, uniqueness: { scope: :group }
end