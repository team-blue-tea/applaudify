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
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import backendUrl from "../backendURL";
import { User } from "../types";

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
  const pathname = usePathname();
  const [currentTabLeft, setCurrentTabLeft] = useState<string>(pathname);
  const [currentUser, setCurrentUser] = useState<User>();

  const [profileLink, setProfileLink] = useState<React.ReactNode>();

  useEffect(() => {
    const url = pathname;
    if (url.includes("/feed")) {
      setCurrentTabLeft("/feed");
    } else if (url.includes("/appreciation")) {
      setCurrentTabLeft("/appreciation");
    } else if (url.includes("/profile")) {
      setCurrentTabLeft("/profile");
    } else if (url.includes("/contact")) {
      setCurrentTabLeft("/contact");
    }
  }, [pathname]);

  useEffect(() => {
    if (status === "authenticated") {
      const email = session?.user?.email!;
      const user: User = getCurrentUser(email) as User;
    }
  }, [status]);

  const getCurrentUser = async (email: string) => {
    const response = await fetch(backendUrl + "/users/email/" + email);
    const jsonData = await response.json();
    setCurrentUser(jsonData);
    return jsonData;
  };

  return (
    <>
      {status === "loading" || currentUser?.id === undefined ? (
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
                  paddingTop: 45,
                }}
              >
                <Menu
                  theme="dark"
                  mode="inline"
                  selectable={true}
                  defaultSelectedKeys={[currentTabLeft]}
                  style={{
                    width: "160px",
                  }}
                  items={[
                    {
                      key: "/feed",
                      icon: (
                        <Link href="/feed">
                          <BookOutlined />
                        </Link>
                      ),
                      label: "Feed",
                    },
                    {
                      key: "/appreciate",
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
                      key: "/profile",
                      icon: (<Link href={"/profile/" + currentUser?.id as string}>
                        <UserOutlined />
                      </Link>),
                      label: "Profile",
                    },
                    {
                      key: "/contact",
                      icon: (
                        <Link href="/contact">
                          <QuestionCircleOutlined />
                        </Link>
                      ),
                      label: "About Us",
                      style: { marginTop: "auto" },
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
                  paddingTop: 45,
                }}
              >
                <div className="demo-logo-vertical" />
                <Menu
                  theme="dark"
                  mode="inline"
                  selectable={false}
                  defaultSelectedKeys={[currentTabLeft]}
                  style={{
                    width: "140px",
                  }}
                  items={
                    [
                      /*                   {
                      key: "1",
                      icon: <CopyrightOutlined />,
                      label: "SALT",
                    }, */
                      /*                 {
                  key: "2",
                  icon: <SettingOutlined />,
                  label: "Settings",
                }, */
                      /*                    {
                      key: "/contact",
                      icon: (
                        <Link href="/contact">
                          <QuestionCircleOutlined />
                        </Link>
                      ),
                      label: "About Us",
                    }, */
                    ]
                  }
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
