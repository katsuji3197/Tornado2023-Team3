import client from "./client";

export const findMatch = (params) => {
  return client.post("matches/find_match", params);
};
