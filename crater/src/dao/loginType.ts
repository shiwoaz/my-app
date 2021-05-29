import Connection from "mysql2/typings/mysql/lib/Connection";
import { nanoid } from "nanoid";

import { GitHubInfo } from "../routers/type";

const addGitHubUser = async (db: Connection, info: GitHubInfo) => {
  const { login, avatar_url, id } = info;
  const sql = `INSERT INTO users (user_uuid, user_name, user_avatar, user_type, date) values ("${nanoid()}","${login}","${avatar_url}",'GITHUB${id}', '${new Date().toLocaleDateString()}') `;
  //   const userInfo = [[`${nanoid()}`, login, avatar_url, "GITHUB" + id]];
  console.log(sql, "sql");

  try {
    db.query(sql, (err, res, field) => {
      if (err) throw err;
      console.log(res, field);
    });
  } catch (err) {
    console.log("添加出错", err);
  }
};

const queryLoginType = (
  db: Connection,
  type: string
): Promise<Array<any> | any> => {
  const sql = `
    SELECT * FROM users WHERE user_type = ?
    `;

  return new Promise((resolve, reject) => {
    db.query(sql, [type], async (err, res) => {
      if (err) throw err;
      console.log(res, 1);
      resolve(res);
    });
  })
    .then((res) => {
      console.log(res, "pro");

      return res;
    })
    .catch((err) => {
      return err;
    });
};

export { addGitHubUser, queryLoginType };
