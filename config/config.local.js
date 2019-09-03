'use strict';

module.exports = appInfo => {

    const config = exports = {};

    // logger配置
    config.logger = {
        outputJSON: true,
        level: "DEBUG"
    }

    // 数据库配置
    config.mysql = {
        // 单数据库信息配置
        client: {
            // host
            host: 'localhost',
            // 端口号
            port: '3306',
            // 用户名
            user: 'root',
            // 密码
            password: '*',
            // 数据库名
            database: 'websites',
        },
        // 是否加载到 app 上，默认开启
        app: true,
        // 是否加载到 agent 上，默认关闭
        agent: false,
    }

    config.sequelize = {
        dialect: 'mysql',
        host: '127.0.0.1',
        port: '3306',
        user: 'root',
        password: '*',
        database: 'websites'
    }

    // 配置socket.io
    config.io = {
        init: { }, // passed to engine.io
        namespace: { // 命名空间为 / 与 /example, 不是 example
            '/': {
                connectionMiddleware: [],
                packetMiddleware: [],
            },
            '/example': {
                connectionMiddleware: [],
                packetMiddleware: [],
            },
        },
        redis: {
            host: "localhost",
            port: 6379,
            auth_pass: '',
            db: 0,
        },
    }

    const userConfig = {}

    return {
        ...config,
        ...userConfig
    }
}