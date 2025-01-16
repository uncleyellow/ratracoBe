// controllers/postsController.js
const Posts = require('../models/posts');

exports.getAllPosts = async (req, res) => {
  const jobs = await Posts.findAll();
  res.json(jobs);
};

exports.createPosts = async (req, res) => {
  const newComments = await Posts.create(req.body);
  res.status(200).json(newComments);
};

exports.updatePosts = async (req, res) => {
  const { id } = req.params;
  await Posts.update(req.body, { where: { post_id: id } });
  res.json({ message: 'Jobs updated' });
};

exports.deletePosts = async (req, res) => {
  const { id } = req.params;
  await Posts.destroy({ where: { post_id: id } });
  res.status(200).send();
};

exports.getPostsById = async (req, res) => {
    const { id } = req.params;
    const user = await Posts.findByPk(id);
    if (!user) return res.status(404).json({ message: 'Jobs not found' });
    res.json(user);
  };