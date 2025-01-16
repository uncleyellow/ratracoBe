// routes/chatRoutes.js
const express = require('express');
const router = express.Router();
const chatController = require('./../../controllers/chatsController');

// Route cho chatbot

/**
 * @swagger
 * tags:
 *   - name: chatbot
 *     description: The chatbot managing API
 * /api/chat:
 *   post:
 *     summary: Chat with bot
 *     tags: 
 *       - chatbot
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               message:
 *                 type: string
 *     responses:
 *       200:
 *         description: Chat response
 */
router.post('/', chatController.chatWithBot); // Thay đổi từ '/chat' thành '/'

module.exports = router;