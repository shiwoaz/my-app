import Connection from "mysql2/typings/mysql/lib/Connection";
import { nanoid } from "nanoid";

import { GitHubInfo, IGiteeInfo, LoginType } from "../routers/type";

const addGitHubUser = (db: Connection, info: GitHubInfo | IGiteeInfo, type: LoginType) => {
  const { login, avatar_url, id } = info;
  const sql = `INSERT INTO users (user_uuid, user_name, user_avatar, user_type, date) values ("${nanoid()}","${login}","${avatar_url}",'${type}${id}', '${new Date().toLocaleDateString()}') `;
  //   const userInfo = [[`${nanoid()}`, login, avatar_url, "GITHUB" + id]];
  console.log(sql, "sql");

  return new Promise((resolve, reject) => {
    db.query(sql, (err, res, field) => {
      if (err) reject(err);
      console.log(res, field);
      resolve(res);
    });
  })
    .then((res) => {
      console.log(res, "promise add!!!!!");
      return res;
    })
    .catch((err) => {
      console.log(err, "promise add err");
      return err;
    });
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
