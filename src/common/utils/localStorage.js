export const getAnswers = () => JSON.parse(localStorage.getItem("quiz")) || [];

export const updateAnswers = (questionId, answers) => {
  const quizData = getAnswers();

  localStorage.setItem(
    "quiz",
    JSON.stringify([
      ...quizData.filter((el) => +el.id !== +questionId),
      { id: +questionId, answers },
    ])
  );
};
