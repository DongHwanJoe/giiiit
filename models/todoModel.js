const mybatisMapper = require('mybatis-mapper');
const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'eduDB',
    password: '1q2w3e4r',
    port: 5433
    // user: 'postgres',
    // host: 'localhost',
    // database: 'postgrestestdb',
    // password: '<dhjoe@1q2w3e4r>',
    // port: 5432
});

mybatisMapper.createMapper(['./mappers/testMapper.xml']);

let format = {language: 'sql', indent: '  '};

const testModel = {
    select: (id, callback) => {
        let param = {
            id : id
        }
        let query = mybatisMapper.getStatement('testMapper', 'getList', param, format);
        pool.query(query, callback);
    },

    insert: (id, contents, callback) => {
        let param = {
            id : id,
            contents : contents
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

    update: (num, contents, callback) => {
        let param = {
            num : Number(num),
            contents : contents
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