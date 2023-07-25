class UserSerializer < ActiveModel::Serializer
  attributes :id, :username
  has_many :groups
  has_many :reactions

end