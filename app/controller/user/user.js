const BaseController = require('../base/baseController');

// function toInt(str) {
//     // 是数字就直接返回
//     if (typeof str === 'number') return str;
//     // 
//     if (!str) return str;
//     // 以十进制转成数字
//     return parseInt(str, 10) || 0;
// }

class UsersController extends BaseController {
    async index() {
        const { ctx } = this;
        const { toInt } = ctx.helper;
        const query = { 
            limit: toInt(ctx.query.limit),
            offset: toInt(ctx.query.offset)
        }
        ctx.logger.debug("token ==> "+ctx.session.token);
        ctx.body = await ctx.model.User.findAll(query);
    }

    async show() {
        const { ctx } = this;
        const { toInt } = ctx.helper;

        const user = await ctx.model.User.findByPk(toInt(ctx.params.id));

        ctx.body = user;
    }

    async create() {
        const { ctx } = this;
        const data = ctx.request.body;

        const user = await ctx.model.User.create(data);

        ctx.status = 201;
        ctx.body = user;
    }

    async updated() {
        const { ctx } = this;
        
        const data = ctx.request.body;
        const id = ctx.params.id;

        const user = await ctx.service.user.updatedUser(id,data);

        if(user){
            ctx.body = user;
        }else {
            ctx.redirect("/404.html");
        }
    
    }

    async delete() {
        const { ctx } = this;
        const { toInt } = ctx.helper;

        const id = toInt(ctx.params.id);

        const user = await ctx.model.User.findByPk(id);

        if(user){
            user.destroy();
            ctx.body = {
                code: 0,
                msg: "删除成功"
            }
        }else {
            ctx.status = 404;
            ctx.redirect("/404.html");
        }
    }
}

module.exports = UsersController;