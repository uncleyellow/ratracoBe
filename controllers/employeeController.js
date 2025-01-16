// controllers/employeeController.js
const Employee = require('../models/employee');

exports.getAllEmployees = async (req, res) => {
  const employees = await Employee.findAll();
  res.json(employees);
};

exports.createEmployee = async (req, res) => {
  const newEmployee = await Employee.create(req.body);
  res.status(200).json(newEmployee);
};

exports.updateEmployee = async (req, res) => {
  const { id } = req.params;
  await Employee.update(req.body, { where: { employee_id: id } });
  res.json({ message: 'Employee updated' });
};

exports.deleteEmployee = async (req, res) => {
  const { id } = req.params;
  await Employee.destroy({ where: { employee_id: id } });
  res.status(200).send();
};

exports.getEmployeeById = async (req, res) => {
  const { id } = req.params;
  const user = await Employee.findByPk(id);
  if (!user) return res.status(404).json({ message: 'Employee not found' });
  res.json(user);
};