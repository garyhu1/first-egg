module.exports = app => {
    const { router, controller } = app;

    router.get("/file/index.html",controller.file.uploadFile.index);

    router.post("/file/upload",controller.file.uploadFile.upload);
}