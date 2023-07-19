class Reaction < ApplicationRecord
  belongs_to :message
  belongs_to :user

  validates :emotion, presence: true
  validates :user, uniqueness: { scope: :message } # check
end
