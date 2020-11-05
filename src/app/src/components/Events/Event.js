import React, { useEffect } from "react";
import {
  ButtonContainer,
  EventWrapper,
  EventButton,
  EventsDisplayContainer,
  EventsPage
} from "./Events.styles";
import {Button} from '../../styles/appStyles'

export default function Event({
  event,
  openPresentation,
  openAgenda,
}) {

  if (!event) return null

  return (
    <EventWrapper>
      <h2>{`${event.title} ${event.start_date}`}</h2>
      <ButtonContainer>
        {event.presentation
          && <EventButton onClick={() => openPresentation(event)}>
            Presentation
          </EventButton>
        }

        {event.agenda
          && <EventButton onClick={() => openAgenda(event)}>
            Agenda
          </EventButton>
        }
      </ButtonContainer>
    </EventWrapper>
  );
}
