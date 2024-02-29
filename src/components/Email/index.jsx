import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import HTMLReactParser from "html-react-parser";

import Button from "../UI/Button";
import TextField from "../UI/TextField";
import { localization } from "../../common/data/localization";
import { validateEmail } from "../../common/utils/validateEmail";
import { getAnswers } from "../../common/utils/localStorage";
import * as quizGateways from "../../gateways/quiz";

import * as Styled from "./Email.styled";

const Email = () => {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(false);
  const navigateTo = useNavigate();

  useEffect(() => {
    if (!getAnswers().length) {
      navigateTo(`/quiz/1`);
    }
  }, []);

  const locale = Cookies.get("locale") || "en";
  const text = localization[locale];

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setIsValid(validateEmail(newEmail));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await quizGateways.save(email, JSON.parse(localStorage.getItem("quiz")));
    } catch (error) {
      console.log(error.message);
    }
    localStorage.setItem("email", email);
    navigateTo("/thank-you");
  };

  return (
    <Styled.Wrapper>
      <Styled.Title>{text.email}</Styled.Title>
      <Styled.Subtitle>{text.emailPrompt}</Styled.Subtitle>
      <Styled.Form onSubmit={handleSubmit}>
        <TextField
          placeholder={text.emailPlaceholder}
          type="email"
          onChange={handleEmailChange}
          value={email}
          error={!isValid && email.length !== 0}
        />
        <Styled.PrivacyPolicy>
          {HTMLReactParser(text.privacyPolicy)}
        </Styled.PrivacyPolicy>
        <Button disabled={!isValid}>{text.next}</Button>
      </Styled.Form>
    </Styled.Wrapper>
  );
};

export default Email;
