const ArticleModel = require('../model/article')

const article = async (router) => {
  router.post('/article/create', async(ctx) => {
    const {content, title, summary} = ctx.request.body
    await ArticleModel.save({content, title, summary})
    ctx.body = 'success'
  })
  .get('/article', async (ctx) => {
    let articleArr = await ArticleModel.get()
    ctx.body = {
      status: 'success',
      articleArr
    }
  })
  .get('/article/detail/:id', async (ctx) => {
    let article = await ArticleModel.getDetail(ctx.params.id)
    ctx.body = {
      status: 'success',
      article
    }
  })
  .put('/article/update', async (ctx) => {
    const {content, title, summary,id} = ctx.request.body
    await ArticleModel.update(id, {content, title, summary})
    ctx.body = 'success'
  })
  .delete('/article/:id', async (ctx) => {
    await ArticleModel.deleteArticle(ctx.params.id)
    ctx.body = 'success'
  })
}

module.exports = article
