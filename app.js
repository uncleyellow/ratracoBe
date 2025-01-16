const express = require('express');
const { Sequelize , DataTypes  } = require('sequelize');
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerOptions = require('./swagger');
const config = require('./config.json');
const apiRoutes = require('./routes/apiRoutes');
const cors = require('cors'); // Nhập cors

// Import models
const EmployeeModel = require('./models/employee');
const JobModel = require('./models/job');
const DepartmentModel = require('./models/department');
const PostModel = require('./models/posts');
const ChatModel = require('./models/chats');
const CommentModel = require('./models/comment');
const UserModel = require('./models/users');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors()); // Thêm middleware CORS
app.use(express.json());

// Swagger setup
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

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

// Initialize models
const initModels = async () => {
  try {
    const models = {
      User:  UserModel(sequelize, DataTypes ),
      Employee: EmployeeModel(sequelize, DataTypes ),
      Job: JobModel(sequelize, DataTypes ),
      Department: DepartmentModel(sequelize, DataTypes ),
      Post: PostModel(sequelize, DataTypes ),
      Comment: CommentModel(sequelize, DataTypes ),
      Chat: ChatModel(sequelize, DataTypes )
    };
    
    // Set up associations
    models.User.hasMany(models.Post, { foreignKey: 'user_id' });
    models.Post.belongsTo(models.User, { foreignKey: 'user_id' });

    models.Post.hasMany(models.Comment, { foreignKey: 'post_id' });
    models.Comment.belongsTo(models.Post, { foreignKey: 'post_id' });

    models.Employee.belongsTo(models.Job, { foreignKey: 'job_id' });
    models.Employee.belongsTo(models.Department, { foreignKey: 'department_id' });
    models.Post.belongsTo(models.Employee, { foreignKey: 'user_id' });

    return models;
  } catch (error) {
    console.error('Model initialization error:', error);
    throw error;
  }
};




// Start application
const startApp = async () => {
  try {
    // Test connection
    await sequelize.authenticate();
    // console.log('Database connection has been established successfully.');

    // Initialize models
    const models = await initModels();
    // console.log('Models initialized successfully');

    // Sync models (no force)
    await sequelize.sync({ force: false });
    // console.log('Models synchronized successfully');

    // Routes
    app.use('/api', apiRoutes);
    
    // Start server
    app.listen(PORT, () => {
      // console.log(`Server is running on port ${PORT}`);
      console.log(`Swagger documentation available at http://localhost:${PORT}/api-docs`);
    });

  } catch (error) {
    console.error('Application startup error:', error);
    process.exit(1);
  }
};

startApp();

module.exports = app;