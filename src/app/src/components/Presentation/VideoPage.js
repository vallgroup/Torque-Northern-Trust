import React from "react";
import { VideoPageContainer } from "./videoStyles";
import { useCurrentEvent } from "../../redux/hooks/queries/useCurrentEvent";
import { useHistory } from "react-router-dom";

export default function VideoPage() {
  const currentEvent = useCurrentEvent();
  const history = useHistory();
  let source;
  if (!!currentEvent.presentation && !!currentEvent.presentation[0].video_url) {
    source = currentEvent.presentation[0].video_url;
  } else if (
    !!currentEvent.presentation &&
    !!currentEvent.presentation[0].file.url
  ) {
    source = currentEvent.presentation[0].file.url;
  } else {
    source = null;
    history.goBack();
  }

  return (
    <VideoPageContainer>
      <iframe
        title="video"
        width="100%"
        height="100%"
        src={source}
        frameBorder="0"
      ></iframe>
    </VideoPageContainer>
  );
}
