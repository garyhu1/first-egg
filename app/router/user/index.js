module.exports = app => {
    const { router, controller } = app;

    router.get("/user/getAll",controller.user.user.index); 

    router.post("/user/addUser",controller.user.user.create);

    router.get("/user/getUser/:id",controller.user.user.show);

    router.put("/user/update/:id",controller.user.user.updated);

    router.delete("/user/remove/:id",controller.user.user.delete);
}