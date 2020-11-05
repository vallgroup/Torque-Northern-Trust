import React from "react";
import {
  AgendaPage,
  WYSIWYG
} from "./Agenda.styles";
import { useCurrentEvent } from "../../redux/hooks/queries/useCurrentEvent";
import { useHistory } from "react-router-dom";
import Header from "../Header/Header";

export default function Agenda() {
  const currentEvent = useCurrentEvent();
  console.log(currentEvent)
  const history = useHistory();
  let source, title, type;

  const agenda = currentEvent.agenda
    && currentEvent.agenda[0]

  console.log(agenda)

  if (!agenda) {
    return ('No agenda found. Go back and try again.')
  }

  // acf_fc_layout ('video'|pdf)

  if ('pdf' === agenda.acf_fc_layout) {
    type = `file`
    source = agenda.file
      && agenda.file.url
    title = agenda.file
      && agenda.file.name
  }

  return (<>
    <Header
      position={`bottom`}
      goBack={true}
    />
    <AgendaPage>
      {(type === `file`)
        ? <iframe
          title={title || ''}
          width="100%"
          height="100%"
          src={source || ''}
          frameBorder="0"
        ></iframe>
        : <WYSIWYG
          dangerouslySetInnerHTML={{ __html: agenda.content || '' }}
        />
      }
    </AgendaPage>
  </>);
}
