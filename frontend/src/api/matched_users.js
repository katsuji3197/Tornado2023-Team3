import client from "./client";

export const updateMatchedUser = (params) => {
  return client.put("matched_users", params);
};
