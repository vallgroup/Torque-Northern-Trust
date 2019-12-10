import React from "react";
import { HomePageContainer } from "./styles/homePage";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <HomePageContainer>
      <Link to="/grid">To Portrait Grid Page</Link>
    </HomePageContainer>
  );
}
