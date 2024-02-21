import { ThemeProvider } from "styled-components";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import { theme } from "./theme";
import Quiz from "./components/Quiz";
import Email from "./components/Email";
import ThankYou from "./components/ThankYou";
import GlobalStyle from "./theme/GlobalStyle";
import StartQuiz from "./components/StartQuiz";

import * as Styled from "./App.styled";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Styled.Wrapper>
        <Styled.Container>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<StartQuiz />} />
              <Route path="/quiz/:id" element={<Quiz />} />
              <Route path="/email" element={<Email />} />
              <Route path="/thank-you" element={<ThankYou />} />
            </Routes>
          </BrowserRouter>
        </Styled.Container>
      </Styled.Wrapper>
    </ThemeProvider>
  );
};

export default App;
