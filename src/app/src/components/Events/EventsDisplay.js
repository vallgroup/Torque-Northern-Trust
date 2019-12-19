import React from "react";
import { EventsDisplayContainer, Event } from "./styles";

export default function EventsDisplay() {
  const data = [1, 2, 3];
  return (
    <EventsDisplayContainer>
      {data.map((event, i) => (
        <Event
          style={
            i === 0
              ? { borderBottom: "none" }
              : i === data.length - 1
              ? { borderTop: "none" }
              : null
          }
        >
          <h1>Title</h1>
        </Event>
      ))}
    </EventsDisplayContainer>
  );
}
