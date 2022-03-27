import React, {ChangeEvent, FC, useState} from 'react';
import {Button, Form, Input} from "antd";
import {useTypedSelector} from "../hook/useTypedSelector";
import {useActions} from "../hook/useActions";

const RegistrationForm: FC = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const {registration} = useActions()
    const {isLoading, error} = useTypedSelector(state => state.auth);

    const onFinish = () => {
        registration(userName, password)
    }
    return (
        <>
            <h2>Регистрация</h2>
            <Form onFinish={onFinish}>
                {error && <div style={{color: "red"}}> {error} </div>}
                <Form.Item
                    label="Имя пользователя"
                    name="username"
                    rules={[{required: true, message: "Пожалйста введите имя"}]}
                >
                    <Input
                        value={userName}
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            setUserName(e.target.value)
                        }
                    />
                </Form.Item>

                <Form.Item
                    label="Пароль"
                    name="password"
                    rules={[{required: true, message: "Пожалуйста введите пароль"}]}
                >
                    <Input.Password
                        value={password}
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            setPassword(e.target.value)
                        }
                    />
                </Form.Item>

                <Form.Item wrapperCol={{offset: 8, span: 16}}>
                    <Button type="primary" htmlType="submit" loading={isLoading}>
                        Зарегистрироваться
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
};

export default RegistrationForm;