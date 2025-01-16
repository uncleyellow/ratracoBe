// routes/jobRoutes.js
const express = require('express');
const router = express.Router();
const jobController = require('./../../controllers/jobController');

// Routes cho công việc

/**
 * @swagger
 * tags:
 *   - name: jobs
 *     description: Jobs management API
 * /api/jobs:
 *   get:
 *     summary: Get all jobs
 *     tags: [jobs]  # Thêm tag cho route
 *     responses:
 *       200:
 *         description: A list of jobs
 */
router.get('/', jobController.getAllJobs);

/**
 * @swagger
 * /api/jobs/{id}:
 *   get:
 *     summary: Get job by ID
 *     tags: [jobs]  # Thêm tag cho route
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The job ID
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Job details
 */
router.get('/:id', jobController.getJobsById);

/**
 * @swagger
 * /api/jobs:
 *   post:
 *     summary: Create a new job
 *     tags: [jobs]  # Thêm tag cho route
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       201:
 *         description: Job created
 */
router.post('/', jobController.createJobs);

/**
 * @swagger
 * /api/jobs/{id}:
 *   put:
 *     summary: Update an existing job
 *     tags: [jobs]  # Thêm tag cho route
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The job ID
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       200:
 *         description: Job updated
 */
router.put('/:id', jobController.updateJobs);

/**
 * @swagger
 * /api/jobs/{id}:
 *   delete:
 *     summary: Delete a job
 *     tags: [jobs]  # Thêm tag cho route
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The job ID
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Job deleted
 */
router.delete('/:id', jobController.deleteJobs);

module.exports = router;