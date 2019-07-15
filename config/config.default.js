/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1561082061738_9787';

  // 打开前置代理模式
  // 注意，开启此模式后，应用就默认自己处于反向代理之后，会支持通过解析约定的请求头来获取用户真实的 IP，协议和域名。
  // 如果你的服务未部署在反向代理之后，请不要开启此配置，以防被恶意用户伪造请求 IP 等信息
  config.proxy = true;

  // 添加 view 配置
  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.tpl': 'nunjucks',
    },
    defaultExtension: '.tpl'
  };

  // 添加 news 的配置项
  config.news = {
    pageSize: 10,
    serverUrl: 'http://127.0.0.1:4002',
  };

  // 安全配置，关闭验证 CSRF 的值
  config.security = {
    csrf: {
      enable: false
    }
  };

  // 设置解析的最大长度
  config.bodyParser = {
    jsonLimit: '1mb',
    formLimit: '1mb',
  };

  // 启用file模式
  config.multipart = {
    mode: 'file',
    // 新增支持的文件扩展名
    fileExtensions: [ '.apk', '.jks', '.pdf' ], // 增加对 apk,jks,pdf 扩展名的文件支持
    // whitelist: [ '.png' ], // 覆盖整个白名单，只允许上传 '.png' 格式
  }

  // jsonp配置
  config.jsonp = {
    callback: 'callback', // 识别 query 中的 `callback` 参数
    limit: 100, // 函数名最长为 100 个字符
    csrf: true, // jsonp接口开启csrf验证
  };

  // session 配置
  config.session = {
    key: "FIRST_EGG",// 代表了存储 Session 的 Cookie 键值对的 key 是什么
    maxAge: 24 * 3600 * 1000, // 一天
    httpOnly: true,
    encrypt: true
  };

  config.redis = { // 单个redis
    client: {
      port: 6379,          // Redis port
      host: 'localhost',   // Redis host
      password: "",
      db: 0
    }
  };

  config.sessionRedis = {
    key: "EGG_SESSION",
    maxAge: 24 * 3600 * 1000, // 1 天
    httpOnly: true,
    encrypt: true
  };

  // 统一重新定向404情况，也可以通过middleware处理
  // config.notfound= {
  //   pageUrl: '/404.html',
  // }

  config.passportGithub = {
    key: '35102eefa59b1e7525b6',
    secret: 'b5b4e502be2e53cd5379900d4af51a7054860610',
    callbackURL: '/passport/github/callback'
  }

  // 配置jwt秘钥
  config.jwt_secret = "0101huweu666"

  // github登录用户统一初始化密码，在进入系统后强制修改密码
  config.passportGithubPassword = "123456789"

  // add your middleware config here
  config.middleware = [
    'handleNofound'
  ];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};