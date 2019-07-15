const Service = require('egg').Service;

class UserService extends Service {

    async updatedUser(id,data) {
        const { ctx } = this;

        ctx.logger.info('id: %j', ctx.helper.toInt(id));

        const user = await ctx.model.User.findByPk(ctx.helper.toInt(id));
        ctx.logger.info('some request data: %j', user);
        if(!user) return null;

        await user.update(data);

        return user;
    }

    async setCookie(token) {
        const { ctx, app } = this;
        await app.redis.set("token",token);
    }

    async commonRegister(data) {
        const { ctx } = this;

        ctx.logger.debug("data = " + data);

        const user = await ctx.model.User.create(data);

        ctx.logger.debug("user = " + user);

        return user;
    }
}

module.exports = UserService;