const assert = require('assert');
const jwt = require('jsonwebtoken');

module.exports = app => {
    app.once('server', server => {
      // websocket
    });
    app.on('error', (err, ctx) => {
      // report error
    });
    app.on('request', ctx => {
      // log receive request
    });
    app.on('response', ctx => {
      // ctx.starttime is set by framework
      const used = Date.now() - ctx.starttime;
      // log total cost
    });

    app.beforeStart(async () => {
      // 应用启动前的操作

      // 可以手动开启一个更新的定时任务，返回一个Promise
      // await app.runSchedule('update_cache');
    });

    // 自定义校验规则
    app.validator.addRule("json",(rule,value) => {
      try {
        JSON.parse(value);
      } catch (err) {
        return 'must be json string';
      }
    });

    // 使用外部存储session
    app.sessionStore = {
      // support promise / async
      async get (key) {
        // return value;
      },
      async set (key, value, maxAge) {
        // set key to store
      },
      async destroy (key) {
        // destroy key
      },
    };

    app.passport.verify(async (ctx, user) => {
      // 检查用户
      assert(user.provider, 'user.provider should exists');
      assert(user.id, 'user.id should exists');
  
      ctx.logger.debug("before app token => "+app.redis.get("token"));

      // user即为github提供的用户信息
      const existsUser = await ctx.model.User.findOne({
        where: { uid: user.id },
      });
      // 已经存在就直接设置返回
      if (existsUser) {
        const token = jwt.sign({ userId: existsUser.id }, app.config.jwt_secret, { expiresIn: '7d' });
        await ctx.service.user.setCookie(token); // 设置登录用户cookie信息，以避开系统接口访问拦截
        ctx.logger.debug("app token => "+app.redis.get("token"));
        return existsUser;
      }
      // 首次github登录，调用 service 注册新用户
      const newUser = await ctx.service.user.commonRegister({
        username: user.name,
        password: app.config.passportGithubPassword, // github登录用户统一初始化密码，在进入系统后强制修改密码
        email: user.profile._json.email,
        provider: user.provider,
        uid: user.id,
        thirdPassUpdateStatus: 0, // 0 代表为初次登录未修改过密码
        avatarUrl: user.photo,
        abstract: user.profile._json.bio,
      });
      const token = jwt.sign({ userId: newUser.id }, app.config.jwt_secret, { expiresIn: '7d' });
      await ctx.service.user.setCookie(token);

      ctx.logger.debug("app token => "+app.redis.get("token"));
      return newUser;
    });
  
    // 将用户信息序列化后存进 session 里面，一般需要精简，只保存个别字段
    app.passport.serializeUser(async (ctx, user) => {
    // 处理 user
    // ...
    // return user;
    });
  
    // 反序列化后把用户信息从 session 中取出来，反查数据库拿到完整信息
    app.passport.deserializeUser(async (ctx, user) => {
    // 处理 user
    // ...
    // return user;
    });
};