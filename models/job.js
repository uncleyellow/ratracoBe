// models/job.js
module.exports = (sequelize, DataTypes) => {
    const Job = sequelize.define('Job', {
      job_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      job_title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      min_salary: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true,
      },
      max_salary: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true,
      },
    });
  
    return Job;
  };