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
    const id = req.session.userid
    const content = req.body.content;
    todoModel.insert(id, content, (error, result) => {
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
    const num = req.body.num;
    todoModel.delete(num, (error, result) => {
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
    const num = req.body.num;
    const content = req.body.content;
    todoModel.update(num, content, (error, result) => {
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
    const num = req.body.num;
    todoModel.done(num, (error, result) => {
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