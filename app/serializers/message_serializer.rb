class MessageSerializer < ActiveModel::Serializer
  attributes :id, :text, :time, :user, :group, :reactions
  
end
