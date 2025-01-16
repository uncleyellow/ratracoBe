// routes/commentRoutes.js
const express = require('express');
const router = express.Router();
const commentController = require('./../../controllers/commentController');

// Routes cho bình luận

/**
 * @swagger
 * tags:
 *   - name: comments
 *     description: Comments management API
 * /api/comments:
 *   get:
 *     summary: Get all comments
 *     tags: [comments]  # Thêm tag cho route
 *     responses:
 *       200:
 *         description: A list of comments
 */
router.get('/comments', commentController.getAllComments);

/**
 * @swagger
 * /api/comments/{id}:
 *   get:
 *     summary: Get comment by ID
 *     tags: [comments]  # Thêm tag cho route
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The comment ID
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Comment details
 */
router.get('/comments/:id', commentController.getCommentsById);

/**
 * @swagger
 * /api/comments:
 *   post:
 *     summary: Create a new comment
 *     tags: [comments]  # Thêm tag cho route
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               content:
 *                 type: string
 *               post_id:
 *                 type: integer
 *               user_id:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Comment created
 */
router.post('/comments', commentController.createComment);

/**
 * @swagger
 * /api/comments/{id}:
 *   put:
 *     summary: Update an existing comment
 *     tags: [comments]  # Thêm tag cho route
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The comment ID
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               content:
 *                 type: string
 *     responses:
 *       200:
 *         description: Comment updated
 */
router.put('/comments/:id', commentController.updateComment);

/**
 * @swagger
 * /api/comments/{id}:
 *   delete:
 *     summary: Delete a comment
 *     tags: [comments]  # Thêm tag cho route
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The comment ID
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Comment deleted
 */
router.delete('/comments/:id', commentController.deleteComment);

module.exports = router;