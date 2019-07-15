const BaseController = require("../base/baseController");
const fs = require("mz/fs");

class FileController extends BaseController {
    async index() {
        await this.ctx.render("file/file.tpl");
    }

    async upload() {
        const { ctx } = this;
        const file = ctx.request.files[0];

        const header = ctx.header;
        const contentType = ctx.get('content-type'); // 获取header对象中的属性值

        ctx.body = {
            filename: file.filename,
            // 获取所有的字段值
            requestBody: ctx.request.body,
            header,
            contentType
        };
    }
}

module.exports = FileController;