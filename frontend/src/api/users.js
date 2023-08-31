import client from "./client";

export const updateUser = (params) => {
  return client.put("users", params);
};
