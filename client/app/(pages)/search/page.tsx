"use client";

import backendUrl from "@/app/backendURL";
import { User } from "@/app/types";
import SearchUserCard from "@/components/SearchUserCard";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const SearchPage = () => {
  const [users, setUsers] = useState([]);
  const search = useSearchParams();
  const searchQuery = search ? (search.get("q") as string) : null;

  const getMatchingUsers = async () => {
    const response = await fetch(backendUrl + "/users");
    const jsonData = await response.json();
    console.log(jsonData);
    setUsers(jsonData);
  };

  useEffect(() => {
    getMatchingUsers();
  }, []);

  return (
    <div>
      {users
        .filter((user: User) =>
          new RegExp(searchQuery as string, "i").test(user.name || "")
        )
        .map((user: User) => (
          <div>
            <SearchUserCard
              name={user.name}
              imageURL={user.imageURL}
              id={user.id}
            />
          </div>
        ))}
    </div>
  );
};

export default SearchPage;
