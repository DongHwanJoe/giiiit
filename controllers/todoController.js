const todoModel = require("../models/todoModel");

const todoController = {
  allselect: (req, res) => {
    todoModel.allselect((error, result) => {
      if(error) {
        res.send(error);
      } else {
        res.json(result.rows);
      }
    })
  },

  getList: (req, res) => {
    if(!req.session.userid){
      res.status(401).send("Unauthorized");
    } else {
      const id = req.session.userid;
      todoModel.select(id, (error, result) => {
        if (error) {
          res.send(error);
        } else {
          res.json(result.rows);
        }
      });
    }
  },

  insert: (req, res) => {
    const userid = req.session.userid
    const text = req.body.text;
    todoModel.insert(userid, text, (error, result) => {
      if (error) {
        res.send(error);
      } else {
        res.json({
          success: true,
        });
      }
    });
  },

  delete: (req, res) => {
    const id = req.body.id;
    todoModel.delete(id, (error, result) => {
      if (error) {
        res.send(error);
      } else {
        res.json({
          success: true,
        });
      }
    });
  },

  update: (req, res) => {
    const id = req.body.id;
    const text = req.body.text;
    todoModel.update(id, text, (error, result) => {
      if (error) {
        res.send(error);
      } else {
        res.json({
          success: true,
        });
      }
    });
  },

  done: (req, res) => {
    const id = req.body.id;
    todoModel.done(id, (error, result) => {
      if(error) {
        res.send(error);
      } else {
        res.json({
          seccess: true,
        });
      }
    });
  }
};

module.exports = todoController;