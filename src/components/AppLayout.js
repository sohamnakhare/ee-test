import React from "react";
import { Layout } from "antd";
import Header from "./Header";

const { Content } = Layout;

const AppLayout = ({children}) => {
  const menus = [
    { key: "cat_1", label: "category 1" },
    { key: "cat_2", label: "category 2" }
  ];

  return (
    <Layout className="app-layout">
      <Header menus={menus} />
      <Content className="app-content">
        {children}
      </Content>
    </Layout>
  );
};

export default AppLayout;
