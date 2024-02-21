import Cookies from "js-cookie";

import questionsConfig from "../data/questions";
import { getSelectedAnswerTexts } from "./answersTexts";

export const getDataForDownload = (quizData) => {
  const locale = Cookies.get("locale") || "en";
  return questionsConfig.reduce((acc, value, index) => {
    const { answers } = quizData.find((el) => el.id === value.id) || {};
    const text = getSelectedAnswerTexts(answers, value.answers)
      .map((str) => str.replace(/\n/g, ""))
      .join(". ");

    const result = {
      order: index + 1,
      title: value.title[locale],
      type: value.type,
      answer: text,
    };

    return [...acc, result];
  }, []);
};
