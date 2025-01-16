// controllers/departmentController.js
const Department = require('../models/department');

exports.getAllDepartment = async (req, res) => {
  const comment = await Department.findAll();
  res.json(comment);
};

exports.createDepartment = async (req, res) => {
  const newComments = await Department.create(req.body);
  res.status(200).json(newComments);
};

exports.updateDepartment = async (req, res) => {
  const { id } = req.params;
  await Department.update(req.body, { where: { department_id: id } });
  res.json({ message: 'Department updated' });
};

exports.deleteDepartment = async (req, res) => {
  const { id } = req.params;
  await Department.destroy({ where: { department_id: id } });
  res.status(200).send();
};

exports.getDepartmentById = async (req, res) => {
    const { id } = req.params;
    const user = await Department.findByPk(id);
    if (!user) return res.status(404).json({ message: 'Comments not found' });
    res.json(user);
  };