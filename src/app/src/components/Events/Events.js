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

export default function Events() {
  const { fetchEvents } = useNortherTrustActions();
  const history = useHistory();
  const { setCurrentEventAction } = useCurrentEventActions();

  useEffect(() => {
    fetchEvents();
  }, []);
  const eventsData = useEvents();
  const { event } = eventsData;

  const goToPresentations = event => {
    history.push(`/presentation`);
    setCurrentEventAction(event);
  };

  return (
    <EventsPage>
      <EventsDisplayContainer>
        {!!eventsData.success && (
          <Event>
            <h1>{event.title}</h1>
            <ButtonContainer>
              <EventButton onClick={() => goToPresentations(event)}>
                Presentation
              </EventButton>
              <EventButton onClick={() => history.push("/agenda")}>
                Agenda
              </EventButton>
            </ButtonContainer>
          </Event>
        )}
      </EventsDisplayContainer>
    </EventsPage>
  );
}

// ${event.presentation[0].video_url}
