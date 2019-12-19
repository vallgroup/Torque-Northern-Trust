import React from "react";
import { VideoPageContainer } from "./videoStyles";

export default function VideoPage({ video }) {
  return (
    <VideoPageContainer>
      <video src={video}></video>
    </VideoPageContainer>
  );
}
