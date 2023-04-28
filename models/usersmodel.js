const mybatisMapper = require('mybatis-mapper');
const { Pool } = require('pg');

const pool = new Pool({
    // user: 'postgres',
    // host: 'localhost',
    // database: 'postgrestestdb',
    // password: '<dhjoe@1q2w3e4r>',
    // port: 5432
    user: 'abacus',
    host: 'localhost',
    database: 'edudb',
    password: 'aibt',
    port: 5432
});

mybatisMapper.createMapper(['./mappers/usersMapper.xml']);

let format = {language: 'sql', indent: '  '};

const usersModel = {
    insert: (id, pwd, name, callback) => {
        let param = {
            id : id,
            pwd : pwd,
            name : name
        }
        let query = mybatisMapper.getStatement('usersMapper', 'insert', param, format);
        pool.query(query, callback);
    },

    getData: (id, callback) => {
        let param = {
            id : id
        }
        let query = mybatisMapper.getStatement('usersMapper', 'getData', param, format);
        pool.query(query, callback);
    },

    update: (id, name, callback) => {
        let param = {
            id : id,
            name : name
        }
        let query = mybatisMapper.getStatement('usersMapper', 'update', param, format);
        pool.query(query, callback);
    },

    updatePwd: (id, newpwd, callback) => {
        let param = {
            id : id,
            newpwd : newpwd
        }
        let query = mybatisMapper.getStatement('usersMapper', 'updatePwd', param, format);
        pool.query(query, callback);
    },

    delete: (id, callback) => {
        let param = {
            id : id
        }
        let query = mybatisMapper.getStatement('usersMapper', 'delete', param, format);
        pool.query(query, callback);
    },

    getList: (callback) => {
        let param = {}
        let query = mybatisMapper.getStatement('usersMapper', 'getList', param, format);
        pool.query(query, callback);
    }
};
  
module.exports = usersModel;