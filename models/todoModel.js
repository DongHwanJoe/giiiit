const mybatisMapper = require('mybatis-mapper');
const { Pool } = require('pg');

const pool = new Pool({
    user: 'abacus',
    host: '192.168.0.103',
    database: 'edudb',
    password: 'aibt',
    port: 5432
    // user: 'postgres',
    // host: 'localhost',
    // database: 'postgrestestdb',
    // password: '<dhjoe@1q2w3e4r>',
    // port: 5432
});

mybatisMapper.createMapper(['./mappers/testMapper.xml']);

let format = {language: 'sql', indent: '  '};

const testModel = {
    allselect: (callback) => {
        let param = {};
        let query = mybatisMapper.getStatement('testMapper', 'allselect', param, format);
        pool.query(query, callback);
    },

    select: (userid, callback) => {
        let param = {
            userid : userid
        }
        let query = mybatisMapper.getStatement('testMapper', 'getList', param, format);
        pool.query(query, callback);
    },

    insert: (userid, text, callback) => {
        let param = {
            userid : userid,
            text : text
        }
        let query = mybatisMapper.getStatement('testMapper', 'insert', param, format);
        pool.query(query, callback);
    },

    delete: (id, callback) => {
        let param = {
            id : Number(id)
        }
        let query = mybatisMapper.getStatement('testMapper', 'delete', param, format);
        pool.query(query, callback);
    },

    update: (id, text, callback) => {
        let param = {
            id : Number(id),
            text : text
        }
        let query = mybatisMapper.getStatement('testMapper', 'update', param, format);
        pool.query(query, callback);
    },

    done: (id, callback) => {
        let param = {
            id : Number(id)
        }
        let query = mybatisMapper.getStatement('testMapper', 'done', param, format);
        pool.query(query, callback);
    }
};
  
module.exports = testModel;