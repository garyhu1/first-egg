let Controller = require("egg").Controller;

class HomeController extends Controller {
    async index() {
        const { ctx, app } = this;
        let count = ctx.cookies.get("count");
        count = count ? Number(count) : 0;
        
        ctx.cookies.set("count",++count);

        ctx.logger.debug("token = "+app.redis.get("token"));
        const token = await app.redis.get("token");
        ctx.body = "Hello world >> " + count + ", token = " + token;
    }

    async remove() {
        const { ctx } = this;

        let count = ctx.cookies.get("count");

        count = count ? Number(count) : 0;

        // 通过设置为null来移除
        ctx.cookies.set("count",null);

        ctx.body = "remove cookies >>> " + count;
    }

    async noFound() {
        const { ctx } = this;

        await ctx.render("error/nofound");
    }
}

module.exports = HomeController;