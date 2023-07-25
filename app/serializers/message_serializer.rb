class MessageSerializer < ActiveModel::Serializer
  attributes :id, :text, :time, :user, :group, :reactions # :group_id could work instead of group obj
  
end
