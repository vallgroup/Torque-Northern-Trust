import React, { useEffect } from "react";
import { useNortherTrustActions } from "../../redux/hooks/commands/useNorthernTrustActions";
import { useEvents } from "../../redux/hooks/queries/useEvents";
import {
  ButtonContainer,
  Event,
  EventButton,
  EventsDisplayContainer,
  EventsPage
} from "./Events.styles";

export default function Events() {
  const data = [1, 2, 3];
  const { fetchEvents } = useNortherTrustActions();

  useEffect(() => {
    fetchEvents();
  }, []);
  const eventsData = useEvents();

  return (
    <EventsPage>
      <EventsDisplayContainer>
        {data.map((event, i) => (
          <Event
            key={i}
            style={
              i === 0
                ? { borderBottom: "none" }
                : i === data.length - 1
                ? { borderTop: "none" }
                : null
            }
          >
            <h1>Title</h1>
            <ButtonContainer>
              <EventButton />
              <EventButton />
            </ButtonContainer>
          </Event>
        ))}
      </EventsDisplayContainer>
    </EventsPage>
  );
}
