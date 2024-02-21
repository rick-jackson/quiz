import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../UI/Button";
import { getAnswers } from "../../common/utils/localStorage";
import { downloadCsv } from "../../common/utils/downloadCsv";
import { localization } from "../../common/data/localization";
import { getDataForDownload } from "../../common/utils/dataForDownload";

import * as Styled from "./ThankYou.styled";

const ThankYou = () => {
  const [data, setData] = useState([]);
  const navigateTo = useNavigate();

  const answers = getAnswers();
  const locale = Cookies.get("locale") || "en";
  const email = localStorage.getItem("email");

  const text = localization[locale];

  useEffect(() => {
    try {
      setData(getDataForDownload(answers));
    } catch (e) {
      navigateTo("/quiz/1");
    }
  }, []);

  const handleResetQuiz = () => {
    localStorage.clear();
    Cookies.remove("locale");
    navigateTo("/quiz/1");
  };

  return (
    <Styled.Container>
      <Styled.Title>{text.thankYou}</Styled.Title>
      <Styled.Subtitle>{text.supportAndQuizText}</Styled.Subtitle>
      <Styled.Checkmark src="/img/checkmark.png" />
      <Styled.Buttons>
        <Styled.Download onClick={() => downloadCsv(data, email)}>
          <img src="/img/download.png" />
          {text.downloadAnswers}
        </Styled.Download>
        <Button onClick={handleResetQuiz}>{text.retakeQuiz}</Button>
      </Styled.Buttons>
    </Styled.Container>
  );
};

export default ThankYou;
