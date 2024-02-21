import Cookies from "js-cookie";
import { useNavigate, useParams } from "react-router-dom";
import HTMLReactParser from "html-react-parser";

import SendButton from "../../UI/Button";
import questionsConfig from "../../../common/data/questions";
import { localization } from "../../../common/data/localization";
import { languageConfig } from "../../../common/configs/language";
import { updateAnswers } from "../../../common/utils/localStorage";
import useAnswerButton from "../../../common/hooks/useAnswerButton";

import * as Styled from "./Question.styled";

const Question = ({ onLoading }) => {
  const navigateTo = useNavigate();
  const { id } = useParams();

  const locale = Cookies.get("locale") || "en";
  const text = localization[locale];

  const {
    title,
    subtitle,
    answers,
    type,
    isMultiple,
    nexQuestionId,
    maxItems,
  } = questionsConfig.find((el) => el.id === +id);

  const { Button, handleSelectedAnswer, selectedAnswers } = useAnswerButton(
    type,
    isMultiple,
    id
  );

  const handleClick = (text, answerId) => {
    const locale = languageConfig[text.toLowerCase()];
    if (locale) {
      Cookies.set("locale", locale, { expires: 7 });
    }
    handleSelectedAnswer(id, answerId, nexQuestionId);
  };

  return (
    <Styled.Container>
      <Styled.Title>{HTMLReactParser(title[locale])}</Styled.Title>
      {subtitle && <Styled.Subtitle>{subtitle[locale]}</Styled.Subtitle>}
      <Styled.Answers>
        {answers.map((props) => {
          const isActive = !!selectedAnswers?.find((elem) => elem === props.id);

          return (
            <Button
              disabled={!isActive && selectedAnswers.length === maxItems}
              $isActive={isActive}
              onClick={() => handleClick(props.text.en, props.id)}
              key={props.id}
            >
              {props.text[locale] || props.text.en}
            </Button>
          );
        })}
      </Styled.Answers>
      {isMultiple && (
        <SendButton
          disabled={!selectedAnswers.length}
          onClick={() => {
            updateAnswers(id, selectedAnswers);
            if (nexQuestionId) {
              navigateTo(`/quiz/${nexQuestionId}`);
            } else {
              onLoading(true);
            }
          }}
        >
          {text.next}
        </SendButton>
      )}
    </Styled.Container>
  );
};

export default Question;
