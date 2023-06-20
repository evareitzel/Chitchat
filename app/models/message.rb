class Message < ApplicationRecord
  belongs_to :group
  belongs_to :user
  has_many :reactions, dependent: :destroy

  validates :text, :time, presence: true
end
