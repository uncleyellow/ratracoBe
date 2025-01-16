// routes/postsRoutes.js
const express = require('express');
const router = express.Router();
const postsController = require('./../../controllers/postsController');

// Routes cho bài viết

/**
 * @swagger
 * tags:
 *   - name: posts
 *     description: Posts management API
 * /api/posts:
 *   get:
 *     summary: Get all posts
 *     tags: [posts]  # Thêm tag cho route
 *     responses:
 *       200:
 *         description: A list of posts
 */
router.get('/', postsController.getAllPosts);

/**
 * @swagger
 * /api/posts/{id}:
 *   get:
 *     summary: Get post by ID
 *     tags: [posts]  # Thêm tag cho route
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The post ID
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Post details
 */
router.get('/:id', postsController.getPostsById);

/**
 * @swagger
 * /api/posts:
 *   post:
 *     summary: Create a new post
 *     tags: [posts]  # Thêm tag cho route
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *               user_id:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Post created
 */
router.post('/', postsController.createPosts);

/**
 * @swagger
 * /api/posts/{id}:
 *   put:
 *     summary: Update an existing post
 *     tags: [posts]  # Thêm tag cho route
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The post ID
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
 *               content:
 *                 type: string
 *     responses:
 *       200:
 *         description: Post updated
 */
router.put('/:id', postsController.updatePosts);

/**
 * @swagger
 * /api/posts/{id}:
 *   delete:
 *     summary: Delete a post
 *     tags: [posts]  # Thêm tag cho route
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The post ID
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Post deleted
 */
router.delete('/:id', postsController.deletePosts);

module.exports = router;