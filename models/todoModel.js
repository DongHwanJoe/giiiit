const mybatisMapper = require('mybatis-mapper');
const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'eduDB',
    password: '1q2w3e4r',
    port: 5433
});

mybatisMapper.createMapper(['./mappers/testMapper.xml']);

let format = {language: 'sql', indent: '  '};

const testModel = {
    allSelect: (callback) => {
        let param = {}
        let query = mybatisMapper.getStatement('testMapper', 'allselect', param, format);
        pool.query(query, callback);
    },

    select: (num, callback) => {
        let param = {
            num : Number(num)
        }
        let query = mybatisMapper.getStatement('testMapper', 'select', param, format);
        pool.query(query, callback);
    },

    insert: (title, contents, callback) => {
        let param = {
            title : title,
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

    update: (num, title, contents, callback) => {
        let param = {
            num : Number(num),
            title : title,
            contents : contents
        }
        let query = mybatisMapper.getStatement('testMapper', 'update', param, format);
        pool.query(query, callback);
    },
};
  
module.exports = testModel;