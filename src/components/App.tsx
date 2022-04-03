import React, { FC, useEffect } from "react";
import AppRouter from "./AppRouter";
import NavBar from "./NavBar";
import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import { useActions } from "../hook/useActions";

const App: FC = () => {
  const { checkToken } = useActions();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      checkToken(localStorage.getItem("token"));
    }
  }, []);

  return (
    <Layout>
      <NavBar />
      <Content>
        <AppRouter />
      </Content>
    </Layout>
  );
};

export default App;
