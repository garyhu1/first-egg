module.exports = app => {
    let { router, controller } = app;

    // 挂载鉴权路由
    app.passport.mount('github');

    // 上面的 mount 是语法糖，等价于
    // const github = app.passport.authenticate('github', {});
    // router.get('/passport/github', github);
    // router.get('/passport/github/callback', github);

    // ----------------------------------------------------------//
    
    require("./router/search")(app);
    require("./router/file")(app);
    require("./router/user")(app);

    router.get("/home/index",controller.home.index);

    router.redirect("/","/home/index",302);

    router.get("/news.html",controller.news.list);

    router.get("/home/remove",controller.home.remove);

    router.post("/login",controller.search.user.login);

    router.get("/404.html",controller.home.noFound)
}