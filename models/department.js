// models/department.js
module.exports = (sequelize, DataTypes) => {
    const Department = sequelize.define('Department', {
      department_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      department_name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      location: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    });
  
    return Department;
  };