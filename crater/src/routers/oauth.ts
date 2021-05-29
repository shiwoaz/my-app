import express, { Request, Response, Router } from "express";
import fetch from "node-fetch";

import { FRONTSITE } from "../settings/Global";
import { Github, github_client_id, github_serect_id } from "../settings/oauth";
import { GitHubInfo } from "./type";

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
  const info = await GetGithubInfo(access_token!, token_type!);

  if (!(info.login && info.url)) {
    console.log(info.login && info.url, info.login, info.url);

    res.redirect(FRONTSITE + "?info=" + info.errno);
    return;
  }
  res.redirect(FRONTSITE + "/rooms");
});

export default router;
