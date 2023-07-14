class Message < ApplicationRecord
  belongs_to :group
  belongs_to :user
  has_many :reactions, dependent: :destroy

  validates :text, presence: true # length: { minimum: 1 }
  validates :time, presence: true 
end
