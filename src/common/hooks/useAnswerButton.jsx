import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { getAnswers, updateAnswers } from "../utils/localStorage";
import AnswerButtons from "../../components/UI/AnswerButtons";

const useAnswerButton = (type, isMultiple, id) => {
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const quizData = getAnswers();

  useEffect(() => {
    const answers = quizData.find((elem) => elem.id === +id)?.answers || [];
    setSelectedAnswers(answers);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const navigateTo = useNavigate();

  const handleAnswerClick = (questionId, answerId, nextQuestionId) => {
    updateAnswers(questionId, [answerId]);
    navigateTo(`/quiz/${nextQuestionId}`);
  };

  const handleMultipleAnswersClick = (_, answerId) => {
    setSelectedAnswers((prev) => {
      const isExisting = prev.some((answer) => answer === answerId);
      return isExisting
        ? prev.filter((answer) => answer !== answerId)
        : [...prev, answerId];
    });
  };

  const { SingleSelect, SingleSelectImage, MultipleSelect, Bubble } =
    AnswerButtons();

  const handleSelectedAnswer = isMultiple
    ? handleMultipleAnswersClick
    : handleAnswerClick;

  const buttonsConfigs = {
    "single-select": SingleSelect,
    "single-select-image": SingleSelectImage,
    "multiple-select": MultipleSelect,
    bubble: Bubble,
  };

  return {
    Button: buttonsConfigs[type],
    handleSelectedAnswer,
    selectedAnswers,
  };
};

export default useAnswerButton;
