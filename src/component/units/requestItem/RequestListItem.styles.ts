import styled from "@emotion/styled";

export const ItemWrapper = styled.div`
  width: 32%;
  margin-bottom: 20px;
  padding: 20px;
  border: 1px solid #e5e5e5;
  border-radius: 5px;

  :hover {
    border: 1px solid #2196f3;
  }

  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
    text-align: center;
  }

  span {
    font-size: 14px;
  }

  hr {
    width: 100%;
    height: 2px;
    border: none;
    background-color: #e5e5e5;
  }

  ul {
    list-style: none;
    width: 50%;
    margin: 40px 0px;
    padding: 0px;

    li {
      display: flex;
      justify-content: space-between;
      margin-bottom: 20px;
      white-space: nowrap;

      div {
        width: 50%;
        font-size: 14px;
      }

      span {
        margin-right: 10px;
        font-weight: bolder;
      }
    }
  }
  @media all and (max-width: 618px) {
    width: 90%;
    padding: 10px;
  }
`;

export const Title = styled.div`
  padding: 5px 0px;
  font-weight: bold;
  font-size: 16px;
`;

export const Status = styled.div`
  width: 50px;
  padding: 5px;
  border: 1px solid #ffa000;
  border-radius: 15px;
  font-weight: 500;
  font-size: 12px;
  color: #ffa000;
`;

export const Due = styled.div`
  margin: 30px 0px 20px 0px;
  font-size: 14px;
  color: #939fa5;
`;

export const DetailButton = styled.button`
  width: 108px;
  height: 32px;
  background-color: #2196f3;
  margin-right: 10px;
  border: none;
  border-radius: 5px;
  color: white;
`;
export const ChatButton = styled.button`
  width: 80px;
  height: 32px;
  border: 1px solid #2196f3;
  border-radius: 5px;
  background-color: white;
  color: #2196f3;
`;
