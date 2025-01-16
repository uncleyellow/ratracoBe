// routes/apiRoutes.js
const express = require('express');
const router = express.Router();

// Nhập các route từ các tệp khác trong thư mục routesApi
const usersRoutes = require('./routesApi/usersRoutes');
const employeesRoutes = require('./routesApi/employeeRoutes');
const jobsRoutes = require('./routesApi/jobsRoutes');
const departmentsRoutes = require('./routesApi/departmentsRoutes');
const postsRoutes = require('./routesApi/postsRoutes');
const commentsRoutes = require('./routesApi/commentsRoutes');
const chatRoutes = require('./routesApi/chatRoutes');

// Sử dụng các route nhỏ
router.use('/users', usersRoutes);
router.use('/employees', employeesRoutes);
router.use('/jobs', jobsRoutes);
router.use('/departments', departmentsRoutes);
router.use('/posts', postsRoutes);
router.use('/comments', commentsRoutes);
router.use('/chat', chatRoutes);

module.exports = router;