const Controller = require('egg').Controller;

class UserController extends Controller {
    async login() {
        // 表单验证
        const createRule = {
            username: {
                type: 'email'
            },
            password: {
                type: 'password',
                compare: 're-password'
            }
        }
        this.ctx.validate(createRule);
        this.ctx.body = this.ctx.request.body;
        // 也可以通过下面的代码自己处理验证失败的处理
        // try{
        //     this.ctx.validate(createRule);
        //     this.ctx.body = this.ctx.request.body;
        // }catch(err) {
        //     this.ctx.body = {
        //         status: 1,
        //         msg: err.message,
        //         err
        //     }
        // }

    }
}

module.exports = UserController;
