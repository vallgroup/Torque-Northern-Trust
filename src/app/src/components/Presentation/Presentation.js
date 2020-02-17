import React from "react";
import { VideoPageContainer } from "./videoStyles";
import { useCurrentEvent } from "../../redux/hooks/queries/useCurrentEvent";
import { useHistory } from "react-router-dom";
import Header from "../Header/Header";

export default function VideoPage() {
  const currentEvent = useCurrentEvent();
  const history = useHistory();
  // history.goBack();
  const presentation = currentEvent.presentation
    && currentEvent.presentation[0]
  let source, title;
  console.log(presentation)

  if (!presentation) {
    return ('No presentation found. Go back and try again.')
  }

  // acf_fc_layout ('video'|pdf)

  if ('pdf' === presentation.acf_fc_layout) {
    source = presentation.file
      && presentation.file.url
    title = presentation.file
      && presentation.file.name
  } else
  if ('video' === presentation.acf_fc_layout) {
    source = `https://www.youtube.com/embed/${presentation.video_id || ''}?autoplay=1`
    title = 'Video player'
  }

  return (<>
    <Header
      position={`bottom`}
      goBack={true}
    />
    <VideoPageContainer>
      <iframe
        title={title || ''}
        width="100%"
        height="100%"
        src={source || ''}
        frameBorder={0}
        allowFullScreen={true}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    </VideoPageContainer>
  </>);
}
