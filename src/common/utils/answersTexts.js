import Cookies from "js-cookie";

export const getSelectedAnswerTexts = (userAnswers, allAnswers) => {
  const locale = Cookies.get("locale") || "en";
  const selectedAnswerTexts = allAnswers
    .filter((el) => userAnswers.includes(el.id))
    .map((item) => item.text && item.text[locale || "en"]);

  return selectedAnswerTexts;
};
