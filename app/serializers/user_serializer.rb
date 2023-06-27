class UserSerializer < ActiveModel::Serializer
  attributes :id, :username
  has_many :groups # not wkg (???)
end
