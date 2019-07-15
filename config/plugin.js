'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }

  nunjucks : {
    enable: true,
    package: 'egg-view-nunjucks'
  },

  validate: {
    enable: true,
    package: 'egg-validate'
  },

  // mysql插件
  mysql: {
    enable: true,
    package: 'egg-mysql'
  },

  // redis
  redis: {
    enable: true,
    package: 'egg-redis'
  },

  // session-redis
  sessionRedis: {
    enable: true,
    package: 'egg-session-redis'
  },

  // sequelize
  sequelize: {
    enable: true,
    package: 'egg-sequelize'
  },

  // passport
  passport: {
    enable: true,
    package: 'egg-passport'
  },

  // passport-github
  passportGithub: {
    enable: true,
    package: 'egg-passport-github'
  },

  // socket.io
  io: {
    enable: true,
    package: 'egg-socket.io'
  }
};