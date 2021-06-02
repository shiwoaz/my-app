import { BaseURL, GiteeOauth, GithubOauth } from "../settings/Global";
import { gitee_client_id, github_client_id } from "../settings/oauth";

export type OauthURL = (arg1: "GITHUB" | "TWITTER" | "GITEE") => string;

const oauthURL: OauthURL = (type) => {
  switch (type) {
    case "GITHUB":
      return `${GithubOauth}?client_id=${github_client_id}&redirect_uri=${BaseURL}:3001/oauth/redirect`;
    case "TWITTER":
      return "";
    case "GITEE":
      return `${GiteeOauth}?client_id=${gitee_client_id}&redirect_uri=${BaseURL}:3001/gitee/redirect&response_type=code`
    default:
      return ''
  }
};

export { oauthURL };
