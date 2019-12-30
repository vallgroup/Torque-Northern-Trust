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

  return (
    <>
      <Header />
      <EventsPage>
        <EventsDisplayContainer>
          {!!eventsData.success && (
            <Event>
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
          )}
        </EventsDisplayContainer>
      </EventsPage>
    </>
  );
}
