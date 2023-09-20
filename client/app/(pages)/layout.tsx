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
  const { data: session } = useSession();

  return (
    <>
      <AppHeader url={session?.user?.image as string} />
      <div className="layout-container">
        <Layout>
          <Sider
            trigger={null}
            collapsible
            collapsed={collapsed}
            style={{ position: "fixed", height: "100%" }}
          >
            <div className="demo-logo-vertical" />
            <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={["1"]}
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
                {
                  key: "3",
                  icon: <TrophyOutlined />,
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
          <Sider
            trigger={null}
            collapsible
            collapsed={collapsed}
            style={{ position: "fixed", height: "100%", right: 0 }}
          >
            <div className="demo-logo-vertical" />
            <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={["1"]}
              items={[
                {
                  key: "1",
                  icon: <CopyrightOutlined />,
                  label: "SALT",
                },
                {
                  key: "2",
                  icon: <SettingOutlined />,
                  label: "Settings",
                },
                {
                  key: "3",
                  icon: <QuestionCircleOutlined />,
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
