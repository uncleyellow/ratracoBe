// controllers/commentController.js
const Comments = require('../models/comment');

exports.getAllComments = async (req, res) => {
  const comment = await Comments.findAll();
  res.json(comment);
};

exports.createComment = async (req, res) => {
  const newComments = await Comments.create(req.body);
  res.status(200).json(newComments);
};

exports.updateComment = async (req, res) => {
  const { id } = req.params;
  await Comments.update(req.body, { where: { comment_id: id } });
  res.json({ message: 'Comment updated' });
};

exports.deleteComment = async (req, res) => {
  const { id } = req.params;
  await Comments.destroy({ where: { comment_id: id } });
  res.status(200).send();
};

exports.getCommentsById = async (req, res) => {
    const { id } = req.params;
    const user = await Comments.findByPk(id);
    if (!user) return res.status(404).json({ message: 'Comments not found' });
    res.json(user);
  };