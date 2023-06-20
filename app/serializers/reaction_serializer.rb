class ReactionSerializer < ActiveModel::Serializer
  attributes :id, :emotion
  belongs_to :message
  belongs_to :user
end
