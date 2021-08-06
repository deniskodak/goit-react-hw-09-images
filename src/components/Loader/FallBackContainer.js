import React from "react";
import Loader from "react-loader-spinner";
import { FallBackContainer } from "./styled";

const ContainerWithLoader = () => (
  <FallBackContainer>
    <Loader
      type="Circles"
      color="#00BFFF"
      height={50}
      width={50}
      secondaryColor="#2484a4"
    />
  </FallBackContainer>
);

export default ContainerWithLoader;
