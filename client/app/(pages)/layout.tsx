"use client";

import AppHeader from "@/components/AppHeader";
import "../globals.css";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme } from "antd";
import { useState } from "react";

const { Header, Sider, Content } = Layout;

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <>
      <AppHeader />
      <div className="layout-container">
        <Layout>
          <Sider trigger={null} collapsible collapsed={collapsed}>
            <div className="demo-logo-vertical" />
            <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={["1"]}
              items={[
                {
                  key: "1",
                  icon: <UserOutlined />,
                  label: "Feed",
                },
                {
                  key: "2",
                  icon: <VideoCameraOutlined />,
                  label: "Appreciate",
                },
                {
                  key: "3",
                  icon: <UploadOutlined />,
                  label: "Badge",
                },
                {
                  key: "4",
                  icon: <UserOutlined />,
                  label: "Profile",
                },
              ]}
            />
          </Sider>
          <Layout>
            <Header style={{ padding: 0, background: colorBgContainer }}>
              {/*             <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
                marginTop: "4rem",
              }}
            /> */}
            </Header>
            <Content
              style={{
                margin: "1rem 16px 24px",
                padding: 24,
                minHeight: 280,
                background: colorBgContainer,
                height: "100vh",
                overflow: "scroll",
              }}
            >
              {children}
            </Content>
          </Layout>
          <Sider trigger={null} collapsible collapsed={collapsed}>
            <div className="demo-logo-vertical" />
            <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={["1"]}
              items={[
                {
                  key: "1",
                  icon: <UserOutlined />,
                  label: "SALT",
                },
                {
                  key: "2",
                  icon: <VideoCameraOutlined />,
                  label: "Settings",
                },
                {
                  key: "3",
                  icon: <VideoCameraOutlined />,
                  label: "Help",
                },
              ]}
            />
          </Sider>
        </Layout>
      </div>
    </>
  );
}
