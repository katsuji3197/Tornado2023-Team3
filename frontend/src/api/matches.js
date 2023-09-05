import client from "./client";
import Cookies from "js-cookie";

// 認証に関するヘッダーを取得
const getAuthHeaders = () => {
  const headers = {
    "access-token": Cookies.get("_access_token"),
    client: Cookies.get("_client"),
    uid: Cookies.get("_uid"),
  };

  return headers;
};

// マッチを作成または探すAPI
export const findMatch = (params) => {
  return client.post("matches/find_match", params, {
    headers: getAuthHeaders(),
  });
};
