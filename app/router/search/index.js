module.exports = app => {
    let { router, controller, middleware } = app;
    
    router.get("/query", middleware.handleUser.uppercase ,controller.search.search.query);

    router.get("/getName/:id/:name",controller.search.search.getParam);
}