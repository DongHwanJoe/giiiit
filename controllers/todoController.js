const todoModel = require("../models/todoModel");

const todoController = {
  allSelect: (req, res) => {
    todoModel.allSelect((error, result) => {
      if (error) {
        res.send(error);
      } else {
        res.json(result.rows);
      }
    });
  },

  select: (req, res) => {
    const num = req.body.num;
    todoModel.select(num, (error, result) => {
      if (error) {
        res.send(error);
      } else {
        res.json(result.rows);
      }
    });
  },

  insert: (req, res) => {
    const title = req.body.title;
    const contents = req.body.contents;
    todoModel.insert(title, contents, (error, result) => {
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
    const title = req.body.title;
    const contents = req.body.contents;
    todoModel.update(num, title, contents, (error, result) => {
      if (error) {
        res.send(error);
      } else {
        res.json({
          success: true,
        });
      }
    });
  },
};

module.exports = todoController;