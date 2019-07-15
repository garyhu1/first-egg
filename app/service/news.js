const Service = require('egg').Service;

class NewsService extends Service {
  async list() {
    // 读取config下的默认配置
    // const { serverUrl, pageSize } = this.config;

    // const data = [
    //     { id: 1, title: '今天是我第一天学习egg了', url: '/index/1' },
    //     { id: 2, title: '今天是我第一次学习egg了', url: '/index/2' }
    // ];

    // 查询全表
    const data = await this.app.mysql.select("web");

    console.log(data);


    return data;
  }
};

module.exports = NewsService;