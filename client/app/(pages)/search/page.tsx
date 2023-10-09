"use client";

import backendUrl from "@/app/backendURL";
import { User } from "@/app/types";
import SearchUserCard from "@/components/SearchUserCard";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const SearchPage = () => {
  const [users, setUsers] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const search = useSearchParams();
  const searchQuery = search ? (search.get("q") as string) : null;

  const getMatchingUsers = async () => {
    const response = await fetch(backendUrl + "/users");
    const jsonData = await response.json();
    setUsers(jsonData);
  };

  useEffect(() => {
    getMatchingUsers();
    filterUsers();
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
    if (filteredArray.length === 0 && users.length > 0) {
      return <h3 className="no-users-found">No users found 😞</h3>;
    }
    if (users.length === filteredArray.length) {
      return (
        <div className="loading-indicator">
          <img src="loading.png" alt="loading..." />
        </div>
      );
    }
  };

  return (
    <div className="searchResult-container">
      <h1 className="main-title">Search Results:</h1>
      {filterUsers()}
    </div>
  );
};

export default SearchPage;
