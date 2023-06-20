class MessageSerializer < ActiveModel::Serializer
  attributes :id, :text, :time
  has_one :group
  has_one :user
end
