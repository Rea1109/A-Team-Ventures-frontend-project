import { RequestListItemProps } from "./RequestListItem.types";
import * as S from "./RequestListItem.styles";
import { v4 as uuidv4 } from "uuid";

const RequestListItem = (props: RequestListItemProps) => {
  return (
    <>
      {props.requestList
        .filter((el) => (props.condition ? el.status === "상담중" : el))
        .map((item) => (
          <S.ItemWrapper key={uuidv4()}>
            <header>
              <S.Title>{item.title}</S.Title>
              {item.status === "상담중" && <S.Status>{item.status}</S.Status>}
            </header>
            <span>{item.client}</span> <br />
            <S.Due>{item.due}까지 납기</S.Due>
            <hr />
            <ul>
              <li>
                <div>도면개수</div>
                <div>
                  <span>{item.count}</span>
                </div>
              </li>
              <li>
                <div>총 수량</div>
                <div>
                  <span>{item.amount}</span>
                </div>
              </li>
              <li>
                <div>가공방식</div>
                <div>
                  {item.method.map((el) => (
                    <span key={uuidv4()}>{el}</span>
                  ))}
                </div>
              </li>
              <li>
                <div>재료</div>
                <div>
                  {item.material.map((el) => (
                    <span key={uuidv4()}>{el}</span>
                  ))}
                </div>
              </li>
            </ul>
            <footer>
              <S.DetailButton>요청내역보기</S.DetailButton>
              <S.ChatButton>채팅하기</S.ChatButton>
            </footer>
          </S.ItemWrapper>
        ))}
    </>
  );
};

export default RequestListItem;
