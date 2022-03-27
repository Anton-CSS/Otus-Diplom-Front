import React, { ChangeEvent, FC, useState } from "react";
import { Button, DatePicker, Form, Input, Row, Select } from "antd";
import { useTypedSelector } from "../hook/useTypedSelector";
import { IEvent } from "../models/event";
import { Moment } from "moment";
import { useActions } from "../hook/useActions";
const { Option } = Select;

interface EventFormProps {
  fun: Function;
}

const EventForm: FC<EventFormProps> = ({ fun }) => {
  const { user } = useTypedSelector((state) => state.auth);
  const [event, setEvent] = useState<IEvent>({
    author: user.username,
    guest: "",
    status: "warning",
    date: "",
    description: "",
  } as IEvent);
  const { fetchEvent } = useActions();
  const { guests } = useTypedSelector((state) => state.event);

  const selectDate = (dateM: Moment | null) => {
    if (dateM) {
      const date = dateM?.toDate();
      const year = date.getFullYear();
      const month =
        date.getMonth() < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
      const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
      setEvent({ ...event, date: `${year}.${month}.${day}` });
    }
  };
  const submitForm = () => {
    fetchEvent(event);
    fun();
  };
  return (
    <Form onFinish={submitForm}>
      <Form.Item
        label="Описание события"
        name="description"
        rules={[{ required: true, message: "Обязательное поле" }]}
      >
        <Input
          onChange={(e) => setEvent({ ...event, description: e.target.value })}
          value={event.description}
        />
      </Form.Item>
      <Form.Item
        label="Выберите дату"
        name="date"
        rules={[{ required: true, message: "Обязательное поле" }]}
      >
        <DatePicker onChange={(date) => selectDate(date)} />
      </Form.Item>

      <Form.Item
        label="Выберите гостя"
        name="guest"
        rules={[{ required: true, message: "Обязательное поле" }]}
      >
        <Select
          onChange={(guest: string) => setEvent({ ...event, guest })}
          placeholder="Select a person"
        >
          {guests.map((guest) => (
            <Option value={guest.username} key={guest._id}>
              {guest.username}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item
        label="Определите статус"
        name="status"
        rules={[{ required: true, message: "Обязательное поле" }]}
      >
        <Select
          onChange={(status) => setEvent({ ...event, status })}
          placeholder="Select a status"
        >
          <Option value="success">Выполнено</Option>
          <Option value="error">Важно</Option>
          <Option value="warning">В очередь задач</Option>
        </Select>
      </Form.Item>

      <Row justify="end">
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Создать
          </Button>
        </Form.Item>
      </Row>
    </Form>
  );
};

export default EventForm;
