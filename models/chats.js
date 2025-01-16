// models/chatModel.js
const { Sequelize } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const Chat = sequelize.define('Chat', {
        userMessage: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        botReply: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    return Chat;
};