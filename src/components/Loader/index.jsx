import Cookies from "js-cookie";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { localization } from "../../common/data/localization";

import * as Styled from "./Loader.styled";

const Loader = () => {
  const [progress, setProgress] = useState(0);
  const navigateTo = useNavigate();
  const locale = Cookies.get("locale");
  const text = localization[locale];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress < 100) {
          return prevProgress + 1;
        } else {
          clearInterval(interval);
          navigateTo(`/email`);
          return 100;
        }
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <Styled.Wrapper>
      <Styled.Container>
        <Styled.Percent>
          <Styled.Svg $progress={progress}>
            <Styled.Circle cx="120" cy="120" r="120" />
            <Styled.Circle cx="120" cy="120" r="120" />
          </Styled.Svg>
          <Styled.Num className="num">
            <h2>
              {progress}
              <span>%</span>
            </h2>
          </Styled.Num>
        </Styled.Percent>
        <Styled.Text>{text.findingCollections}...</Styled.Text>
      </Styled.Container>
    </Styled.Wrapper>
  );
};

export default Loader;
