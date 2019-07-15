'use strict'

module.exports = app => {

    const { INTEGER, DATE, STRING } = app.Sequelize;

    const User = app.model.define("users",{
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

    return User;
}