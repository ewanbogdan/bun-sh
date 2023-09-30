import axios from "axios";

export const fetchUsers = async (user: string) => {
  const res = await axios.get("https://api.github.com/users/" + user);
  return res.data;
};
