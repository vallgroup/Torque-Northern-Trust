import React, { useEffect } from "react";
import { useNortherTrustActions } from "../../redux/hooks/commands/useNorthernTrustActions";
import { useEvents } from "../../redux/hooks/queries/useEvents";
import {
  ButtonContainer,
  EventButton,
  EventsDisplayContainer,
  EventsPage
} from "./Events.styles";
import { useHistory } from "react-router-dom";
import { useCurrentEventActions } from "../../redux/hooks/commands/useCurrentEventActions";
import Header from "../Header/Header";
import Event from "./Event";

export default function Events() {
  const { fetchEvents } = useNortherTrustActions();
  const history = useHistory();
  const { setCurrentEventAction } = useCurrentEventActions();
  const eventsData = useEvents();
  useEffect(() => {
    fetchEvents();
  }, []);

  const goToEventPresentation = event => {
    history.push(`/presentation`);
    setCurrentEventAction(event);
  };

  const goToEventAgenda = event => {
    history.push(`/agenda`);
    setCurrentEventAction(event);
  };

  const { events } = eventsData;

  return (
    <>
      <Header />
      <EventsPage>
        <EventsDisplayContainer>
          {events
            && events.map((event, i) => {
              return (<Event
                key={i}
                event={event}
                openPresentation={goToEventPresentation}
                openAgenda={goToEventAgenda}
              />)
            })}
        </EventsDisplayContainer>
      </EventsPage>
    </>
  );
}
