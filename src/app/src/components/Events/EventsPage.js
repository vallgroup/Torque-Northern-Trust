import React from "react";
import { EventsPageContainer } from "./Events.styles";
import EventsDisplay from "./EventsDisplay";

export default function EventsPage() {
  return (
    <EventsPageContainer>
      <EventsDisplay />
    </EventsPageContainer>
  );
}
