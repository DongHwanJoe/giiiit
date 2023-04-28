const todoModel = require("../models/todoModel");

const todoController = {
  getList: (req, res) => {
    const id = req.session.userid;
    todoModel.select(id, (error, result) => {
      if (error) {
        res.send(error);
      } else {
        res.json(result.rows);
      }
    });
  },

  insert: (req, res) => {
    const contents = req.body.contents;
    todoModel.insert(contents, (error, result) => {
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
    const contents = req.body.contents;
    todoModel.update(num, contents, (error, result) => {
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