//const mysql = require("mysql");

const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DATABASENAME,
  process.env.DATABASEUSER,
  process.env.DATABASEPASSWORD,
  {
    host: "localhost",
    dialect: "mysql",
  }
);

try {
  sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

module.exports = sequelize;
// var con = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "timeengc_institution",
//     multipleStatements: true
// });
// con.connect((err) => {
//     console.log('Connected to MySQL Server!');
// });
// module.exports = con;
