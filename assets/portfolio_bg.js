import React from "react";
import styled, { css } from "styled-components";

const portfolio_bg = () => (
  <Svg
    width="738"
    height="802"
    viewBox="0 0 738 802"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="portfolio_bg"
  >
    <PinkPath
      d="M564.925 420.008C598.242 421.171 617.805 457.964 600.139 486.235L488.751 664.494C471.085 692.765 429.44 691.31 413.789 661.876L315.107 476.282C299.457 446.847 321.539 411.509 354.855 412.672L564.925 420.008Z"
      fill="#FF8D8D"
      fillOpacity="0.3"
    />
    <GreenPath
      d="M170.465 64.9581C187.134 36.0878 228.804 36.0879 245.473 64.9582L350.572 246.995C367.24 275.866 346.405 311.953 313.068 311.953H102.87C69.5332 311.953 48.6979 275.865 65.3662 246.995L170.465 64.9581Z"
      fill="#5DC399"
      fillOpacity="0.3"
    />
  </Svg>
);

const PinkPath = styled.path``;
const GreenPath = styled.path``;

const Svg = styled.svg`
  ${PinkPath} {
    animation: float 10s ease-in-out 3s infinite;
  }

  ${GreenPath} {
    animation: float 10s ease-in-out infinite;
  }

  @keyframes float {
    0% {
      box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
      transform: translatey(0px) rotate(0deg);
    }
    50% {
      box-shadow: 0 25px 15px 0px rgba(0, 0, 0, 0.2);
      transform: translatey(-90px) rotate(15deg);
    }
    100% {
      box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
      transform: translatey(0px) rotate(0deg);
    }
  }
`;

export default portfolio_bg;
