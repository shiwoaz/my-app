import mysql from "mysql2";

import { mysqlConfig } from "../../settings/mysql";

const { host, user, password, database } = mysqlConfig;

const db = mysql.createConnection({ host, user, password, database });
describe("table", () => {
  it("user", async () => {
    const sql = `
        CREATE TABLE users  (
          \`key\` INT UNSIGNED AUTO_INCREMENT,
          \`user_uuid\` VARCHAR(20) NOT NULL,
          \`user_name\` VARCHAR(20) NOT NULL,
          \`user_avatar\` VARCHAR(200) ,
          \`date\` DATE,
          PRIMARY KEY (\`key\`)
          )
        `;
    db.query(sql, (err) => {
      if (err) throw err;
      console.log("创建用户成功");
      db.end();
    });
  });
});
