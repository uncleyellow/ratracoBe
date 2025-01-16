// controllers/userController.js
const User = require('../models/users'); // Nhập mô hình User

exports.getAllUsers = async (req, res) => {
    console.log(User)
    try {
        const users = await User.findAll(); // Lấy tất cả người dùng
        res.json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error retrieving users', error: error.message });
    }
};


exports.getUserById = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findByPk(id); // Tìm người dùng theo khóa chính
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error retrieving user', error: error.message });
    }
};


exports.createUser = async (req, res) => {
    const { username, password, email } = req.body; // Giả sử bạn nhận các trường này từ req.body
    console.log(User);  // Kiểm tra xem đối tượng có phải là Sequelize Model không

    try {
        const newUser = await User.create({
            username,
            password,
            email,
            createdAt: new Date(), // Nếu không có `timestamps: true` trong model
        });
        res.status(201).json({ message: 'User created successfully', user: newUser });
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: 'Error creating user', error: error.message });
    }
};

exports.updateUser = async (req, res) => {
    const { id } = req.params;
    const { username, password, email } = req.body;

    try {
        const user = await User.findByPk(id); // Tìm người dùng theo ID
        if (!user) return res.status(404).json({ message: 'User not found' });

        await user.update({
            username,
            password,
            email,
        }); // Cập nhật thông tin người dùng

        res.json({ message: 'User updated successfully', user });
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: 'Error updating user', error: error.message });
    }
};


exports.deleteUser = async (req, res) => {
    const { id } = req.params;

    try {
        const user = await User.findByPk(id); // Tìm người dùng theo ID
        if (!user) return res.status(404).json({ message: 'User not found' });

        await user.destroy(); // Xóa người dùng
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: 'Error deleting user', error: error.message });
    }
};
