import styled from "styled-components";

export const WrapperMainPage = styled.main`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ArrowsMainPage = styled.div`
  margin: 20px;
  @media (max-width: 768px) {
    transform: rotate(90deg);
  }
`;

export const PMainPage = styled.p`
  color: #000000;
  font-size: 20px;
  font-weight: bold;
`;