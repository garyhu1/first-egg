const Controller = require('egg').Controller;

class NewsController extends Controller {
    async list() {
        const ctx = this.ctx;
        // const page = ctx.query.page || 1;
        const indexList = await ctx.service.news.list();

        this.logger.debug(indexList);

        await ctx.render('news/list', { list: indexList });
    }
}

module.exports = NewsController;