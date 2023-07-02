class User < ApplicationRecord
  has_secure_password

  has_many :messages, dependent: :destroy
  has_many :groups, through: :messages
  has_many :reactions, dependent: :destroy

  validates :username, presence: true
  validates :username, uniqueness: true
  # validates :groups, uniqueness: { scope: :group, message: "can join only once" } # NOT WKG
  # validates :group, uniqueness: { scope: :user } # ? - FIX so people can only join groups once
end
