import React from "react";
import { Layout } from "antd";
import "../app/globals.css";
import Link from "next/link";
import { ImageUrl } from "@/app/types";
import UserAvatar from "./UserAvatar";

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
        }}
      >
        <Link href={""} className="demo-logo">
          <img src="logo-img.png" className="logo-img"></img>
        </Link>
        <div className="search-field">
          <input type="text" className="search-input" />
        </div>
        <Link href={""} className="profile-icon">
          <UserAvatar url={props.url} />
        </Link>
      </Header>
    </Layout>
  );
};

export default App;
