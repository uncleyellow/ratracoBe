// routes/employeesRoutes.js
const express = require('express');
const router = express.Router();
const employeeController = require('./../../controllers/employeeController');

// Routes cho nhân viên

/**
 * @swagger
 * tags:
 *   - name: employees
 *     description: Employees management API
 * /api/employees:
 *   get:
 *     summary: Get all employees
 *     tags: [employees]  # Thêm tag cho route
 *     responses:
 *       200:
 *         description: A list of employees
 */
router.get('/', employeeController.getAllEmployees);

/**
 * @swagger
 * /api/employees/{id}:
 *   get:
 *     summary: Get employee by ID
 *     tags: [employees]  # Thêm tag cho route
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The employee ID
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Employee details
 */
router.get('/:id', employeeController.getEmployeeById);

/**
 * @swagger
 * /api/employees:
 *   post:
 *     summary: Create a new employee
 *     tags: [employees]  # Thêm tag cho route
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               job_id:
 *                 type: integer
 *               department_id:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Employee created
 */
router.post('/', employeeController.createEmployee);

/**
 * @swagger
 * /api/employees/{id}:
 *   put:
 *     summary: Update an existing employee
 *     tags: [employees]  # Thêm tag cho route
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The employee ID
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               job_id:
 *                 type: integer
 *               department_id:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Employee updated
 */
router.put('/:id', employeeController.updateEmployee);

/**
 * @swagger
 * /api/employees/{id}:
 *   delete:
 *     summary: Delete an employee
 *     tags: [employees]  # Thêm tag cho route
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The employee ID
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Employee deleted
 */
router.delete('/:id', employeeController.deleteEmployee);

module.exports = router;