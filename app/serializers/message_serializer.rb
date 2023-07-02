class MessageSerializer < ActiveModel::Serializer
  attributes :id, :text, :time, :user
  # has_one :group
  # has_one :user
  # belongs_to :user

end
