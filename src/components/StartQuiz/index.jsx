import { Link } from "react-router-dom";
import Button from "../UI/Button";

const StartQuiz = () => {
  return (
    <Button style={{ margin: "auto" }}>
      <Link
        to="/quiz/1"
        style={{ color: "#fff", textDecoration: "none", display: "block" }}
      >
        Start Quiz
      </Link>
    </Button>
  );
};

export default StartQuiz;
