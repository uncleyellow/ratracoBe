// controllers/chatController.js
const Chat = require('../models/chats');

exports.chatWithBot = async (req, res) => {
    const userMessage = req.body.message;
    
    // Logic đơn giản để phản hồi
    let botReply = "I'm not sure how to respond to that.";
    
    if (userMessage.includes("hi")) {
        botReply = "Hello! How can I assist you?";
    } else if (userMessage.includes("bye")) {
        botReply = "Goodbye! Have a great day!";
    }

    // Lưu hội thoại vào cơ sở dữ liệu
    try {
        await Chat.create({ userMessage, botReply });
        res.json({ reply: botReply });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Unable to save the chat.' });
    }
};