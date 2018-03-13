const {mongoose} = require('../mongo/connect')

const Schema = mongoose.Schema

const ArticleSchema = new Schema({
  title: String,
  summary: String,
  content: String
})

const Article = mongoose.model('Article',ArticleSchema)

class ArticleDao {
    save(obj){
        return new Promise((resolve, reject) => {
            var instance = new Article(obj);
            instance.save((err, data) => {
                if(err) return reject(err);
                resolve(data);
            });
        });
    }

    async get() {
      let articleArr = await Article.find();
      return articleArr
    }

    async getDetail(id) {
      let article = await Article.findById(id);
      console.log(article)
      return article
    }

    async deleteArticle(id) {
      await Article.deleteOne({_id:id});
    }

    async update(id, article) {
      await Article.findByIdAndUpdate(id, article)
    }
}

module.exports = new ArticleDao()

