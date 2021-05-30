import { useEffect, useState } from "react";
import isServer from "../../../lib/isServer";

import localStor from "../../../lib/localStorage";
import searchParase from "../../../lib/searchParase";
import { APIURL } from "../../../settings/Global";

export const useFetchUserInfo = async () => {
  if (isServer) return null;

  const { type: code } = searchParase(window.location.search) as {
    type: string;
  };

  const getInfo = async () => {
    const res = await fetch(`${APIURL}/userinfo?code=${code}`);
    const row = await res.text();

    localStor("info", row);
  };

  useEffect(() => {
    getInfo();
  }, []);
};
