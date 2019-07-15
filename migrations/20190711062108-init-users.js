'use strict';

module.exports = {
  // 在执行数据库升级时调用的函数，创建 users 表
  up: async (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    const { INTEGER, DATE, STRING } = Sequelize;
    await queryInterface.createTable('users', {
      id: { 
        type: INTEGER, 
        primaryKey: true, 
        autoIncrement: true 
      },
      username: STRING(30),
      age: INTEGER,
      created_at: DATE,
      updated_at: DATE,
      password: STRING(255),
      uid: INTEGER,
      email: STRING(30),
      thirdPassUpdateStatus: INTEGER,
      avatarUrl: STRING(255),
      abstract: STRING(255)
    });
  },

  // 在执行数据库降级时调用的函数，删除 users 表
  down: async (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    await queryInterface.dropTable('users');
  }
};
