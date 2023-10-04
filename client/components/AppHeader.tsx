import React, { useEffect, useState } from "react";
import { Layout } from "antd";
import "../app/globals.css";
import Link from "next/link";
import { ImageUrl } from "@/app/types";
import UserAvatar from "./UserAvatar";
import SearchInput from "./SearchInput";

const { Header } = Layout;

const App = (props: ImageUrl) => {
  return (
    <Layout>
      <Header
        style={{
          position: "fixed",
          top: 0,
          zIndex: 1,
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "4rem",
          padding: "0 400px",
          animation: "1s ease-out 0s 1 fadeIn",
        }}
      >
        <Link href={"/feed"} className="demo-logo">
          <img src="logo-img.png" className="logo-img"></img>
        </Link>
        <SearchInput />
        <Link href={"/profile"} className="profile-icon">
          <UserAvatar url={props.url} />
        </Link>
      </Header>
    </Layout>
  );
};

export default App;
