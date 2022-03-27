import React, { FC } from "react";
import { Badge, Calendar } from "antd";
import { IEvent } from "../models/event";
import { Moment } from "moment";
import { formDate } from "../util/util";

interface CalendarEventProps {
  events: IEvent[];
}

const CalendarEvent: FC<CalendarEventProps> = ({ events }) => {
  function dateCellRender(value: Moment) {
    const formatDate = formDate(value.toDate());
    const currentDayEvents = events.filter((ev) => ev.date === formatDate);
    return (
      <ul className="events">
        {currentDayEvents.map((item, index) => (
          <li key={index}>
            <Badge status={item.status} text={item.description} />
          </li>
        ))}
      </ul>
    );
  }
  return <Calendar dateCellRender={dateCellRender} />;
};

export default CalendarEvent;
