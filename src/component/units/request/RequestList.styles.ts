import styled from "@emotion/styled";

export const MainWrapper = styled.div`
  * {
    margin: 0px;
    box-sizing: border-box;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1400px;
  height: 100vh;
`;

export const Header = styled.header`
  width: 100%;

  h2 {
    margin: 50px 0px 10px 0px;
  }

  @media all and (max-width: 618px) {
    width: 90%;

    h2 {
      margin: 20px 0px 10px 0px;
    }
  }
`;

export const FilterWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 50px 0px 20px 0px;

  div {
    display: flex;
  }

  @media all and (max-width: 618px) {
    flex-direction: column;
    margin: 20px 0px 20px 0px;
  }
`;

export const Refresh = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  div {
    width: 24px;
    height: 24px;
    margin-right: 10px;
  }

  span {
    line-height: 25px;
  }

  @media all and (max-width: 618px) {
    position: absolute;
    bottom: 30px;
  }

  :hover {
    cursor: pointer;
    color: #2196f3;
  }
`;

export const ToogleWrapper = styled.div`
  @media all and (max-width: 618px) {
    margin-top: 20px;
  }
`;

export const Main = styled.main`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-top: 20px;

  @media all and (max-width: 618px) {
    flex-direction: column;
    align-items: center;
    flex-wrap: nowrap;
  }
`;

export const RequestListDefaultView = styled.div`
  width: 100%;
  height: 100px;
  border: 1px solid #e5e5e5;
  text-align: center;
  line-height: 100px;
  color: #e5e5e5;
`;
