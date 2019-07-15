const Controller = require('egg').Controller;

class SearchController extends Controller {

    async query() {
        this.ctx.body = `search result : ${this.ctx.query.name}`
    }

    async getParam() {
        this.ctx.body = {
            name: this.ctx.params.name,
            id: this.ctx.params.id
        }
    }
}

module.exports = SearchController;