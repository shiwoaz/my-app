import Connection from "mysql2/typings/mysql/lib/Connection";

export const UserInfo = (db: Connection, userId: string) => {
  const sql = `SELECT * FROM \`users\` WHERE \`user_type\` = "${userId}" `;
  return new Promise((resolve, reject) => {
    db.query(sql, (err, res) => {
      if (err) reject(err);
      resolve(res);
    });
  }).then(
    (res) => {
      console.log("user info success", res);

      return res;
    },
    (err) => {
      console.log("user info err", err);
      return err;
    }
  );
};
