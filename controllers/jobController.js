// controllers/jobController.js
const Jobs = require('../models/department');

exports.getAllJobs = async (req, res) => {
  const jobs = await Jobs.findAll();
  res.json(jobs);
};

exports.createJobs = async (req, res) => {
  const newComments = await Jobs.create(req.body);
  res.status(200).json(newComments);
};

exports.updateJobs = async (req, res) => {
  const { id } = req.params;
  await Jobs.update(req.body, { where: { job_id: id } });
  res.json({ message: 'Jobs updated' });
};

exports.deleteJobs = async (req, res) => {
  const { id } = req.params;
  await Jobs.destroy({ where: { job_id: id } });
  res.status(200).send();
};

exports.getJobsById = async (req, res) => {
    const { id } = req.params;
    const user = await Jobs.findByPk(id);
    if (!user) return res.status(404).json({ message: 'Jobs not found' });
    res.json(user);
  };