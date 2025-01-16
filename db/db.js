const { Sequelize } = require('sequelize');
const config = require('./../config.json');


// Database connection
const sequelize = new Sequelize(
    config.development.database,
    config.development.username, // Tên người dùng (sa)
    config.development.password, // Mật khẩu (1)
    {
      host: config.development.host, // Sử dụng host từ config
      dialect: config.development.dialect,
      dialectOptions: {
        ...config.development.dialectOptions, // Thêm các tùy chọn dialect
        options: {
          ...config.development.dialectOptions.options,
          encrypt: true, // Đảm bảo rằng kết nối được mã hóa
        }
      },
      pool: {
        max: 5,
        min: 0,
        acquire: 60000,
        idle: 10000
      },
      logging: console.log
    }
  );
  

module.exports = sequelize;
