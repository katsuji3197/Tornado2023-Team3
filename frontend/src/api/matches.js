import client from "./client";
import { getAuthHeaders } from "./auth";

// マッチを作成または探すAPI
export const findMatch = async (params) => {
  try {
    const response = await client.post("matches/find_match", params, {
      headers: getAuthHeaders(),
    });
    return response;
  } catch (error) {
    console.error("findMatch API call failed:", error);
    throw error; // エラーをthrowして、呼び出し元でcatchできるようにします。
  }
};
