import client from "./client";
import Cookies from "js-cookie";

// 認証に関するヘッダーを取得
export const getAuthHeaders = () => {
  const headers = {
    "access-token": Cookies.get("_access_token"),
    client: Cookies.get("_client"),
    uid: Cookies.get("_uid"),
  };

  return headers;
};

// サインアップ（新規アカウント作成）
export const signUp = (params) => {
  return client.post("auth", params);
};

// サインイン（ログイン）
export const signIn = (params) => {
  return client.post("auth/sign_in", params);
};

// サインアウト（ログアウト）
export const signOut = () => {
  return client.delete("auth/sign_out", {
    headers: getAuthHeaders(),
  });
};

// 認証済みのユーザーを取得
export const getCurrentUser = () => {
  if (
    !Cookies.get("_access_token") ||
    !Cookies.get("_client") ||
    !Cookies.get("_uid")
  )
    return null;

  return client.get("/auth/sessions", {
    headers: getAuthHeaders(),
  });
};
