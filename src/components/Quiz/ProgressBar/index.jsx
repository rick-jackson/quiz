import { useNavigate, useParams } from "react-router-dom";
import questionsConfig from "../../../common/data/questions";

import * as Styled from "./ProgressBar.styled";

const ProgressBar = () => {
  const navigateTo = useNavigate();
  const { id } = useParams();

  const currentQuestionIndex = questionsConfig.findIndex(
    (element) => element.id === +id
  );

  const prevQuestion = questionsConfig.find(
    (question) => question.nexQuestionId === +id
  );

  return (
    <Styled.Wrapper>
      <Styled.Toolbar>
        {prevQuestion?.id ? (
          <button
            onClick={() => navigateTo(`/quiz/${prevQuestion.id}`)}
            style={{ color: "#fff" }}
          >
            <img src="/img/arrow-left.png" />
          </button>
        ) : (
          <i style={{ width: "11px" }} />
        )}
        <Styled.Count>
          <Styled.CurrentQuestion>
            {currentQuestionIndex + 1}
          </Styled.CurrentQuestion>
          /{questionsConfig.length}
        </Styled.Count>
        <button>
          <img src="/img/points.png" />
        </button>
      </Styled.Toolbar>
      <Styled.Progress
        $currentQuestionIndex={currentQuestionIndex + 1}
        $questionsLength={questionsConfig.length}
      />
    </Styled.Wrapper>
  );
};

export default ProgressBar;
