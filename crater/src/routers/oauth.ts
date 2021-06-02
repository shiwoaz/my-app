import express, { Request, Response, Router } from "express";
import fetch from "node-fetch";

import { FRONTSITE } from "../settings/Global";
import { Gitee, GiteeRedirect, gitee_client_id, gitee_serect_id, Github, github_client_id, github_serect_id, GiteeUserInfo } from "../settings/oauth";
import { GitHubInfo, IGiteeInfo } from "./type";
import { addGitHubUser, queryLoginType } from "../dao/loginType";
import db from "../dao/m";

const router: Router = express.Router();

export type GetGithubTokenFunc = (code: string) => Promise<{
  access_token?: string;
  token_type?: string;
  error?: any;
}>;

export type GetGithubInfoFunc = (
  token: string,
  type: string
) => Promise<GitHubInfo | any>;

const GetGithubToken: GetGithubTokenFunc = async (code) => {
  try {
    const res = await fetch(
      `${Github}?client_id=${github_client_id}&client_secret=${github_serect_id}&code=${code}`,
      {
        method: "POST",
        headers: {
          accept: "application/json",
        },
      }
    );
    const { access_token, token_type } = await res.json();
    console.log(access_token, token_type);
    return { access_token, token_type, error: undefined };
  } catch (error) {
    console.log(error, "出错");
    return { error, access_token: undefined, token_type: undefined };
  }
};

const GetGithubInfo: GetGithubInfoFunc = async (token, type) => {
  try {
    const res = await fetch("https://api.github.com/user", {
      method: "GET",
      headers: {
        Authorization: `${type}  ${token}`,
      },
    });
    return await res.json();
  } catch (error) {
    console.log(error);
    return error;
  }
};

/* ----------------- GITHUB OAUTH  ----------------- */

router.get("/oauth/redirect", async (req: Request, res: Response) => {
  //   console.log(req.query);
  const code = req.query?.code;
  console.log(code);

  if (!code && typeof code === "undefined") {
    res
      .json({
        message: "ILLEGAL REQUST",
      })
      .status(401);
    return;
  }

  const { access_token, token_type, error } = await GetGithubToken(
    code as string
  );
  if (!!error) {
    res.redirect(FRONTSITE);
    return;
  }

  console.log("success");
  const info = (await GetGithubInfo(access_token!, token_type!)) as
    | GitHubInfo
    | any;
  console.log(info);

  //github wrong
  if (!(info.login && info.url)) {
    console.log(info.login && info.url, info.login, info.url);

    res.redirect(FRONTSITE + "?info=" + info.errno);
    return;
  }

  //add user to database
  const row = await queryLoginType(db, "GITHUB" + info.id);
  console.log(row, "row!!");

  if (row.length === 0) {
    const addRes = await addGitHubUser(db, info, "GITHUB");
    console.log(addRes, ";;");
  } else {
    console.log("已经存在", row);
    res.redirect(FRONTSITE + "/redirect?type=" + row[0]["user_type"]);
    return;
  }
  const addRow = await queryLoginType(db, "GITHUB" + info.id);
  res.redirect(FRONTSITE + "/redirect?type=" + addRow[0]["user_type"]);
  return;
  // res.redirect(FRONTSITE + "/rooms");
});

/* ----------------- GITEE OAUTH  ----------------- */

export type GiteeTokenFunc = (code: string) => Promise<{
  access_token?: string
  token_type?: string
  e?: any
}>

const GiteeToken: GiteeTokenFunc = async (code) => {
  try {
    const res = await fetch(
      `${Gitee}grant_type=authorization_code&code=${code}&client_id=${gitee_client_id}&redirect_uri=${`http://localhost:3001/gitee/redirect`}&client_secret=${gitee_serect_id}`,
      {
        method: "POST",
      }
    )
    const { access_token, token_type } = await res.json()
    return { access_token, token_type }
  } catch (e) {
    return { e }
  }
}

export type GiteeInfoFunc = (token: string, type: string) => Promise<IGiteeInfo | any>

const GiteeInfo: GiteeInfoFunc = async (token, type) => {
  const res = await fetch(
    `${GiteeUserInfo}?access_token=${token}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      charset: 'UTF-8'
    }
  })

  const info = await res.json()
  console.log(info, "gitee info");
  return info
}

router.get('/gitee/redirect', async (req: Request, res: Response) => {
  console.log(123);
  const code = req.query?.code;
  console.log(code);
  if (!code && code?.length !== 64) {
    res.json({
      message: "ILLEGAL REQUST"
    }).status(401)
    return
  }
  const { access_token, token_type, e } = await GiteeToken(code as string)
  console.log(access_token, token_type, e, "130");
  if (typeof e !== 'undefined' && e) {
    console.log("出错", e);
    res.redirect(FRONTSITE)
    return
  }

  const info = await GiteeInfo(access_token!, token_type!)
  console.log(info, "inside");
  if (!(info.login && info.url)) {
    console.log(info.login && info.url, info.login, info.url);

    res.redirect(FRONTSITE + "?info=" + info.errno);
    return;
  }

  const row = await queryLoginType(db, "GITEE" + info.id);
  console.log(row, "row!!");

  if (row.length === 0) {
    console.log("需要储存");
    const addRes = await addGitHubUser(db, info, 'GITEE');
    console.log(addRes, ";;");
  } else {
    console.log("已经存在Gitee");
    res.redirect(FRONTSITE + "/redirect?type=" + row[0]["user_type"])
    return
  }

  const addRow = await queryLoginType(db, "GITEE" + info.id);
  console.log(addRow, "row!!");
  res.redirect(FRONTSITE + "/redirect?type=" + addRow[0]["user_type"])
  return
})

export default router;
