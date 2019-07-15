const Controller = require("egg").Controller;

/**
 * @author garyhu
 * @description Controller基类，所有Controller类可以继承
 */
class BaseController extends Controller {
    get user() {
        return this.ctx.session.user;
    }

    success(data) {
        data = data || {};

        this.ctx.body = {
            status: 0,
            msg: "success",
            result: data
        }
    }

    noFound(msg) {
        msg = msg || "Not Found";
        this.ctx.throw(404,msg);
    }

    error(msg) {
        msg = msg || "请求失败";

        this.ctx.body = {
            status: 1,
            msg: msg
        }
    }
}

module.exports = BaseController;
