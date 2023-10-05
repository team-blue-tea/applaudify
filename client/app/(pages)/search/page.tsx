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

  const filterUsers = () => {
    const filteredArray = users
      .filter((user: User) =>
        new RegExp(searchQuery as string, "i").test(user.name as string)
      )
      .map((user: User) => (
        <SearchUserCard
          name={user.name}
          imageURL={user.imageURL}
          id={user.id}
        />
      ));
    if (filteredArray.length > 0) {
      return filteredArray;
    }
    return <h3 className="no-users-found">No users found 😞</h3>;
  };

  return (
    <div className="searchResult-container">
      <h1 className="main-title">Search Results:</h1>
      {filterUsers()}
    </div>
  );
};

export default SearchPage;
