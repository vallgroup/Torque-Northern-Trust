import React from "react";
import { AgendaPage } from "./Agenda.styles";
import { useCurrentEvent } from "../../redux/hooks/queries/useCurrentEvent";
import { useHistory } from "react-router-dom";

export default function Agenda() {
  const currentEvent = useCurrentEvent();
  const history = useHistory();
  let agenda;
  let contentType;

  if (!!currentEvent.agenda && !!currentEvent.agenda[0].content) {
    agenda = currentEvent.agenda[0].content;
    contentType = "content";
  } else if (!!currentEvent.agenda && !!currentEvent.agenda[0].file.url) {
    agenda = currentEvent.agenda[0].file.url;
    contentType = "file";
  } else {
    agenda = null;
    history.goBack();
  }

  if (contentType === "file") {
    return (
      <AgendaPage>
        <iframe
          title="pdf"
          width="100%"
          height="100%"
          src={agenda}
          frameBorder="0"
        ></iframe>
      </AgendaPage>
    );
  } else {
    return (
      <AgendaPage>
        <div>{agenda}</div>
      </AgendaPage>
    );
  }
}
