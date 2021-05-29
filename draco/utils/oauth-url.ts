import { BaseURL, GithubOauth } from "../settings/Global";
import { github_client_id } from "../settings/oauth";

export type OauthURL = (arg1: "GITHUB" | "TWITTER") => string;

const oauthURL: OauthURL = (type) => {
  switch (type) {
    case "GITHUB":
      return `${GithubOauth}?client_id=${github_client_id}&redirect_uri=${BaseURL}:3001/oauth/redirect`;
    case "TWITTER":
      return "";
  }
};

export { oauthURL };
