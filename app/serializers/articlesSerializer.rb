class ArticleSerializer < ActiveModel::Serializer
  attributes :title, :url, :description, :author

end
