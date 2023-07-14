class Message < ApplicationRecord
  belongs_to :group
  belongs_to :user
  has_many :reactions, dependent: :destroy

  validates :text, length: { minimum: 1 } # presence: true
end
