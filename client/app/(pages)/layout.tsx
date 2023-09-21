"use client";

import AppHeader from "@/components/AppHeader";
import "../globals.css";
import {
  UserOutlined,
  QuestionCircleOutlined,
  SettingOutlined,
  TrophyOutlined,
  SafetyCertificateOutlined,
  BookOutlined,
  CopyrightOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme } from "antd";
import { useState } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";

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
  const { data: session, status } = useSession();

  return (
    <>
      {status === "loading" ? (
        <div className="loading-indicator">
          <img src="loading.png" alt="loading..." />
        </div>
      ) : (
        <>
          <AppHeader url={session?.user?.image as string} />
          <div className="layout-container">
            <div className="whitespace"></div>
            <Layout
              style={{
                margin: 0,
              }}
            >
              <Sider
                trigger={null}
                collapsible
                collapsed={collapsed}
                className="left-sider"
                style={{
                  height: "100vh",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div className="demo-logo-vertical" />
                <Menu
                  theme="dark"
                  mode="inline"
                  defaultSelectedKeys={["1"]}
                  style={{
                    width: "160px",
                  }}
                  items={[
                    {
                      key: "1",
                      icon: (
                        <Link href="/home">
                          <BookOutlined />
                        </Link>
                      ),
                      label: "Feed",
                    },
                    {
                      key: "2",
                      icon: (
                        <Link href="/appreciate">
                          <SafetyCertificateOutlined />
                        </Link>
                      ),
                      label: "Appreciate",
                    },
                    /*                 {
                  key: "3",
                  icon: <TrophyOutlined />,
                  label: "Badge",
                }, */
                    {
                      key: "4",
                      icon: <UserOutlined />,
                      label: "Profile",
                    },
                  ]}
                />
              </Sider>
              <Layout
                style={{
                  margin: 0,
                }}
              >
                {/* <Header style={{ padding: 0, background: colorBgContainer }}>
              <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
                marginTop: "4rem",
              }}
            />
            </Header> */}
                <Content
                  style={{
                    margin: 0,
                    padding: 0,
                    paddingBottom: 70,
                    backgroundColor: "var(--lightBlue)",
                    height: "100vh",
                    overflow: "scroll",
                    minWidth: 500,
                  }}
                >
                  {children}
                </Content>
              </Layout>
              <Sider
                trigger={null}
                collapsible
                collapsed={collapsed}
                className="right-sider"
                style={{
                  height: "100vh",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div className="demo-logo-vertical" />
                <Menu
                  theme="dark"
                  mode="inline"
                  defaultSelectedKeys={["0"]}
                  style={{
                    width: "140px",
                  }}
                  items={[
                    {
                      key: "1",
                      icon: <CopyrightOutlined />,
                      label: "SALT",
                    },
                    /*                 {
                  key: "2",
                  icon: <SettingOutlined />,
                  label: "Settings",
                }, */
                    {
                      key: "3",
                      icon: (
                        <Link href="/contact">
                          <QuestionCircleOutlined />
                        </Link>
                      ),
                      label: "About Us",
                    },
                  ]}
                />
              </Sider>
            </Layout>
            <div className="whitespace"></div>
          </div>
        </>
      )}
    </>
  );
}
