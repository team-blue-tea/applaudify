"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const SearchInput = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const onSearch = (event: React.FormEvent) => {
    event.preventDefault();
    const encodedSearchQuery = encodeURI(searchQuery);
    if (
      encodedSearchQuery === "" ||
      encodedSearchQuery === "%20" ||
      !encodedSearchQuery ||
      searchQuery === "" ||
      searchQuery === " " ||
      !searchQuery
    ) {
      alert("Search field cannot be empty");
      return;
    }
    router.push(`/search?q=${encodedSearchQuery}`);
    setSearchQuery("");
  };

  return (
    <form className="search-form" onSubmit={onSearch}>
      <input
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
        className="search-bar"
        placeholder="Search User"
      />
      <input type="submit" value="🔍" className="search-button" />
    </form>
  );
};

export default SearchInput;
