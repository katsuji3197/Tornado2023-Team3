import client from "./client";
import Cookies from "js-cookie";

// サインアップ（新規アカウント作成）
export const signUp = (params) => {
  return client.post("auth", params);
};

// export const signUp = async (params) => {
//   const response = await client.post("auth", params);
//   if (
//     response.headers["access-token"] &&
//     response.headers["client"] &&
//     response.headers["uid"]
//   ) {
//     Cookies.set("_access_token", response.headers["access-token"]);
//     Cookies.set("_client", response.headers["client"]);
//     Cookies.set("_uid", response.headers["uid"]);
//   }
//   return response;
// };

// サインイン（ログイン）
export const signIn = (params) => {
  console.log("params", params);
  return client.post("auth/sign_in", params);
};

// export const signIn = async (params) => {
//   const response = await client.post("auth/sign_in", params);
//   if (
//     response.headers["access-token"] &&
//     response.headers["client"] &&
//     response.headers["uid"]
//   ) {
//     Cookies.set("_access_token", response.headers["access-token"]);
//     Cookies.set("_client", response.headers["client"]);
//     Cookies.set("_uid", response.headers["uid"]);
//   }
//   return response;
// };

// サインアウト（ログアウト）
export const signOut = () => {
  return client.delete("auth/sign_out", {
    headers: {
      "access-token": Cookies.get("_access_token"),
      client: Cookies.get("_client"),
      uid: Cookies.get("_uid"),
    },
  });
};
// export const signOut = async () => {
//   try {
//     const response = await client.delete("auth/sign_out", {
//       headers: {
//         "access-token": Cookies.get("_access_token"),
//         client: Cookies.get("_client"),
//         uid: Cookies.get("_uid"),
//       },
//     });
//     // サインアウトが成功したらクッキーを削除
//     if (response.status === 200) {
//       Cookies.remove("_access_token");
//       Cookies.remove("_client");
//       Cookies.remove("_uid");
//     }
//     return response;
//   } catch (error) {
//     console.error("Error during sign out:", error);
//     throw error;
//   }
// };

// 認証済みのユーザーを取得
export const getCurrentUser = () => {
  if (
    !Cookies.get("_access_token") ||
    !Cookies.get("_client") ||
    !Cookies.get("_uid")
  )
    return null;

  return client.get("/auth/sessions", {
    headers: {
      "access-token": Cookies.get("_access_token"),
      client: Cookies.get("_client"),
      uid: Cookies.get("_uid"),
    },
  });
};
