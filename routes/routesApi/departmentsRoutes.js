// routes/departmentRoutes.js
const express = require('express');
const router = express.Router();
const departmentController = require('./../../controllers/departmentController');

// Routes cho phòng ban

/**
 * @swagger
 * tags:
 *   - name: departments
 *     description: Departments management API
 * /api/departments:
 *   get:
 *     summary: Get all departments
 *     tags: [departments]  # Thêm tag cho route
 *     responses:
 *       200:
 *         description: A list of departments
 */
router.get('/', departmentController.getAllDepartment); // Thay đổi từ '/departments' thành '/'

/**
 * @swagger
 * /api/departments/{id}:
 *   get:
 *     summary: Get department by ID
 *     tags: [departments]  # Thêm tag cho route
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The department ID
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Department details
 */
router.get('/:id', departmentController.getDepartmentById); // Thay đổi từ '/departments/:id' thành '/:id'

/**
 * @swagger
 * /api/departments:
 *   post:
 *     summary: Create a new department
 *     tags: [departments]  # Thêm tag cho route
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       201:
 *         description: Department created
 */
router.post('/', departmentController.createDepartment); // Thay đổi từ '/departments' thành '/'

/**
 * @swagger
 * /api/departments/{id}:
 *   put:
 *     summary: Update an existing department
 *     tags: [departments]  # Thêm tag cho route
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The department ID
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
 *     responses:
 *       200:
 *         description: Department updated
 */
router.put('/:id', departmentController.updateDepartment); // Thay đổi từ '/departments/:id' thành '/:id'

/**
 * @swagger
 * /api/departments/{id}:
 *   delete:
 *     summary: Delete a department
 *     tags: [departments]  # Thêm tag cho route
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The department ID
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Department deleted
 */
router.delete('/:id', departmentController.deleteDepartment); // Thay đổi từ '/departments/:id' thành '/:id'

module.exports = router;