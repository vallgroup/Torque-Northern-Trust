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
import { useHistory } from "react-router-dom";
import { useCurrentEventActions } from "../../redux/hooks/commands/useCurrentEventActions";
import Header from "../Header/Header";
import { data } from "./data";

export default function Events() {
  const { fetchEvents } = useNortherTrustActions();
  const history = useHistory();
  const { setCurrentEventAction } = useCurrentEventActions();

  useEffect(() => {
    fetchEvents();
  }, []);
  const eventsData = useEvents();
  const { event } = eventsData;

  const goToEventPresentation = event => {
    history.push(`/presentation`);
    setCurrentEventAction(event);
  };

  const goToEventAgenda = event => {
    history.push(`/agenda`);
    setCurrentEventAction(event);
  };

  // Using dummy data for now
  const events = data;

  return (
    <>
      <Header />
      <EventsPage>
        <EventsDisplayContainer>
          {!!events.success &&
            events.events.map((event, i) => (
              <Event key={i} borderTop={i === 0 ? "5px solid white" : null}>
                <h1>{event.title}</h1>
                <ButtonContainer>
                  <EventButton onClick={() => goToEventPresentation(event)}>
                    Presentation
                  </EventButton>
                  <EventButton onClick={() => goToEventAgenda(event)}>
                    Agenda
                  </EventButton>
                </ButtonContainer>
              </Event>
            ))}
        </EventsDisplayContainer>
      </EventsPage>
    </>
  );
}
