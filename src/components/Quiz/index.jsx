import { useState } from "react";

import Loader from "../Loader";
import Question from "./Question";
import ProgressBar from "./ProgressBar";

import * as Styled from "./Quiz.styled";

const Quiz = () => {
  const [isLoading, setLoading] = useState(false);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Styled.Quiz>
      <ProgressBar />
      <Question onLoading={setLoading} />
    </Styled.Quiz>
  );
};

export default Quiz;
