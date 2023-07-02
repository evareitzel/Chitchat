class User < ApplicationRecord
  has_secure_password

  has_many :messages, dependent: :destroy
  has_many :groups, through: :messages
  has_many :reactions, dependent: :destroy

  validates :username, presence: true
  # validates :group_id, uniqueness: true # FIX so people can only join groups once
  
end
