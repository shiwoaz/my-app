import mysql from "mysql2";

import { mysqlConfig } from "../settings/mysql";

const { host, user, password, database } = mysqlConfig;

const db = mysql.createConnection({ host, user, password, database });

// const userTable = `
//   CREATE TABLE users  (
//     \`key\` INT UNSIGNED AUTO_INCREMENT,
//     \`user_uuid\` VARCHAR(25) NOT NULL,
//     \`user_name\` VARCHAR(20) NOT NULL,
//     \`user_avatar\` VARCHAR(200) ,
//     \`user_type\` VARCHAR(50),
//     \`date\` DATE,
//     PRIMARY KEY (\`key\`)
//   )
// `;

// db.query(userTable, (err) => {
//   if (err) throw err;
//   console.log("添加成功");
// });

export default db;
