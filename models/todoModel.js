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

    select: (id, callback) => {
        let param = {
            id : id
        }
        let query = mybatisMapper.getStatement('testMapper', 'getList', param, format);
        pool.query(query, callback);
    },

    insert: (id, content, callback) => {
        let param = {
            id : id,
            content : content
        }
        let query = mybatisMapper.getStatement('testMapper', 'insert', param, format);
        pool.query(query, callback);
    },

    delete: (num, callback) => {
        let param = {
            num : Number(num)
        }
        let query = mybatisMapper.getStatement('testMapper', 'delete', param, format);
        pool.query(query, callback);
    },

    update: (num, content, callback) => {
        let param = {
            num : Number(num),
            content : content
        }
        let query = mybatisMapper.getStatement('testMapper', 'update', param, format);
        pool.query(query, callback);
    },

    done: (num, callback) => {
        let param = {
            num : Number(num)
        }
        let query = mybatisMapper.getStatement('testMapper', 'done', param, format);
        pool.query(query, callback);
    }
};
  
module.exports = testModel;