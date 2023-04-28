const usersModel = require("../models/usersmodel");
const crypto = require('crypto');

function encodedpwd(pwd, salt) {
  let hash = crypto.createHash('md5');
  hash.update(pwd + salt);
  return hash.digest('hex');
}

function getSalt(length = 5) {
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let salt = '';
    for (let i = 0, n = charset.length; i < length; ++i) {
        salt += charset.charAt(Math.floor(Math.random() * n));
    }
    return salt;
}

const usersController = {
    login: (req, res) => {
        const id = req.body.id;
        const pwd = req.body.pwd;
        usersModel.getData(id, (error, result) => {
            if (error) {
                res.send(error);
            } else {
                if (result.rows.length === 0) {
                    res.json({ success: false, message: "일치하는 계정이 없습니다." });
                } else {
                    const user = result.rows[0];
                    const [salt, savedPwd] = user.pwd.split('.');
                    const userinfo = {
                        userid: user.id,
                        username: user.name
                    } 
                    const hashedPwd = crypto.createHash('md5').update(pwd + salt).digest('hex');
                    
                    if (savedPwd === hashedPwd) {
                        req.session.userid = user.id;
                        req.session.username = user.name;
                        res.json({ success: true, userinfo: userinfo});
                    } else {
                        res.json({ success: false, message: "비밀번호가 일치하지 않습니다." });
                    }
                }
            }
        });
    },

    insert: (req, res) => {
        const id = req.body.id;
        const inputpwd = req.body.pwd;
        const salt = getSalt();
        const enpwd = encodedpwd(inputpwd, salt);
        const pwd = `${salt}.${enpwd}`;
        const name = req.body.name;
        usersModel.insert(id, pwd, name, (error, result) => {
            if (error) {
                res.send(error);
            } else {
                res.json({success: true});
            }
        });
    },

    getData: (req, res) => {
        if (!req.session.userid) {
            res.status(401).send("Unauthorized");
            return;
        }
        const id = req.session.userid;
        console.log(id);
        usersModel.getData(id, (error, result) => {
            if (error) {
              res.send(error);
            } else {
              res.json(result.rows);
            }
        });
    },

    update: (req, res) => {
        const id = req.body.id;
        const name = req.body.name;
        usersModel.update(id, name, (error, result) => {
            if (error) {
                res.send(error);
            } else {
                res.json({success: true});
            }
        });
    },

    updatePwd: (req, res) => {
        const id = req.body.id;
        const pwd = req.body.pwd;
        const nwepwd = req.body.newpwd;
        usersModel.updatePwd(id, nwepwd, (error, result) => {
            if (error) {
                res.send(error);
            } else {
                res.json({success: true});
            }
        });
    },

    delete: (req, res) => {
        const id = req.body.id;
        usersModel.delete(id, (error, result) => {
            if (error) {
                res.send(error);
            } else {
                res.json({success: true});
            }
        });
    },

    getList: (req, res) => {
        usersModel.getList((error, result) => {
            if (error) {
                res.send(error);
            } else {
                res.json(result.rows);
            }
        });
    }
};

module.exports = usersController;