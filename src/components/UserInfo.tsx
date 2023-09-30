import { useState, useCallback } from "react";
import { fetchUsers } from "../githubAPI";

export const UserInfo = () => {
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<any>(null);

  const getUser = useCallback(
    async (userName: string) => {
      try {
        setLoading(true);
        const userData = await fetchUsers(userName);
        setUser(userData);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    },
    [fetchUsers]
  );

  return (
    <div>
      <div style={{ marginBottom: 50 }}>
        <input
          style={{ marginRight: 10 }}
          type="text"
          value={value}
          onChange={(e: any) => setValue(e.target.value)}
          placeholder="Search by Name"
        />
        <button type="submit" onClick={() => getUser(value)}>
          Search
        </button>
      </div>
      {loading && <p>Loading...</p>}
      {!loading && user && (
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <a href={user.html_url} target="_blank">
            {user.login}
          </a>
          <img
            style={{ borderRadius: "50%", width: 200, height: 200 }}
            src={user.avatar_url}
          />
        </div>
      )}
    </div>
  );
};
