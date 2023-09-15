import React from "react";
import { Layout } from "antd";
import "../app/globals.css";
import Link from "next/link";

const { Header } = Layout;

const App: React.FC = () => {
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
          <input type="text" className="search-input"/>
        </div>
        <Link href={""} className="profile-icon">
          Profile
        </Link>

        {/* <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={new Array(3).fill(null).map((_, index) => ({
            key: String(index + 1),
            label: `nav ${index + 1}`,
          }))}
        /> */}
      </Header>
    </Layout>
  );
};

export default App;
