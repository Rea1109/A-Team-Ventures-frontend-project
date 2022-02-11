import styled from "@emotion/styled";

export const MainWrapper = styled.div`
  width: 100%;
  max-width: 1400px;
  height: 100vh;
  background-color: #e4e6e7;
`;

export const Header = styled.header`
  width: 100%;
  border: 1px solid gold;
`;

export const Main = styled.main`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  border: 1px solid red;

  div {
    width: 30%;
    height: 200px;
    margin-bottom: 20px;
    margin-right: 20px;
    border: 1px solid black;
  }

  @media all and (max-width: 618px) {
    flex-direction: column;
    align-items: center;

    div {
      width: 100%;
    }
  }
`;
