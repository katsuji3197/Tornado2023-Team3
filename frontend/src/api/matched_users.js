import client from "./client";
import { getAuthHeaders } from "./auth";

export const getMatchedUsers = (params) => {
  return client.get("matched_users", {
    params: params,
    headers: getAuthHeaders(),
  });
};
