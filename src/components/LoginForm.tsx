import React, { ChangeEvent, FC, useEffect, useState } from "react";
import { Form, Input, Button } from "antd";
import { useTypedSelector } from "../hook/useTypedSelector";
import { useActions } from "../hook/useActions";

const LoginForm: FC = () => {
  const { login, getClients } = useActions();
  const { error, isLoading, user } = useTypedSelector((state) => state.auth);

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (localStorage.getItem("token")) {
      getClients(`Bearer: ${localStorage.getItem("token")}`);
    }
  }, [user]);

  const onFinish = () => {
    login(userName, password);
  };

  return (
    <Form onFinish={onFinish}>
      {error && <div style={{ color: "red" }}> {error} </div>}
      <Form.Item
        label="Имя пользователя"
        name="username"
        rules={[{ required: true, message: "Пожалйста введите имя" }]}
      >
        <Input
          value={userName}
          data-testid="userNameInput"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setUserName(e.target.value)
          }
        />
      </Form.Item>

      <Form.Item
        label="Пароль"
        name="password"
        rules={[{ required: true, message: "Пожалуйста введите пароль" }]}
      >
        <Input.Password
          value={password}
          data-testid="passwordInput"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
        />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit" loading={isLoading}>
          Войти
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
