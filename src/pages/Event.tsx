import React, { FC, useEffect, useState } from "react";
import CalendarEvent from "../components/CalendarEvent";
import { Button, Layout, Modal, Row } from "antd";
import EventForm from "../components/EventForm";
import { useActions } from "../hook/useActions";
import { useTypedSelector } from "../hook/useTypedSelector";

const Event: FC = () => {
  const [visible, setVisible] = useState(false);
  const { fetchGuests, receiveEvents } = useActions();
  const { user } = useTypedSelector((state) => state.auth);
  const { events } = useTypedSelector((state) => state.event);
  useEffect(() => {
    fetchGuests();
    receiveEvents(user.username);
  }, []);

  return (
    <Layout>
      <CalendarEvent events={events} />
      <Row justify="center">
        <Button onClick={() => setVisible(!visible)}>Добавить событие</Button>
      </Row>
      <Modal
        title="Добавить событие"
        visible={visible}
        footer={null}
        onCancel={() => setVisible(!visible)}
      >
        <EventForm fun={setVisible} />
      </Modal>
    </Layout>
  );
};

export default Event;
