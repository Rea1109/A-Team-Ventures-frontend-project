import axios from "axios";
import { useEffect, useState } from "react";
import SelectUI from "../../commons/select/Select.container";
import Toogle from "../../commons/toggle/Toggle.container";
import {
  MainWrapper,
  Header,
  Main,
  ItemWrapper,
  Status,
  Title,
  ChatButton,
  DetailButton,
  Due,
  FilterWrapper,
  Refresh,
  ToogleWrapper,
} from "./RequestList.styles";
import { v4 as uuidv4 } from "uuid";

const METHOD = ["밀링", "선반"];
const MATERIAL = [
  "알루미늄",
  "탄소강",
  "구리",
  "합금강",
  "강철",
  "스테인리스강",
];

interface ITEM {
  id: number;
  title: string;
  client: string;
  due: string;
  count: number;
  amount: number;
  method: string[];
  material: string[];
  status: string;
}

const RequestList = () => {
  const [method, setMethod] = useState<string[]>([]);
  const [material, setMaterial] = useState<string[]>([]);
  const [condition, setCondition] = useState(false);
  const [requestList, setRequestList] = useState<ITEM[]>([]);

  useEffect(() => {
    fetchList();
  }, [method, material]);

  const fetchList = async () => {
    const result = await axios.get("http://localhost:3001/requests");

    if (method.length === 0 && material.length === 0) {
      // 방식 ,재료 선택 없을시
      setRequestList(result.data);
    } else if (method.length !== 0 && material.length === 0) {
      // 방식만 선택시
      const filterMethod = result.data.filter((item: ITEM) => {
        return item.method.filter((el) => method.includes(el)).length !== 0;
      });
      setRequestList(filterMethod);
    } else if (method.length === 0 && material.length !== 0) {
      // 재료만 선택시
      const filterMaterial = result.data.filter((item: ITEM) => {
        return item.material.filter((el) => material.includes(el)).length !== 0;
      });
      setRequestList(filterMaterial);
    } else {
      // 방식 , 재료 모두 선택시
      const filterMethod = result.data.filter((item: ITEM) => {
        return item.method.filter((el) => method.includes(el)).length !== 0;
      });
      const filterMaterial = result.data.filter((item: ITEM) => {
        return item.material.filter((el) => material.includes(el)).length !== 0;
      });
      const final = filterMethod.filter((item: ITEM) => {
        return filterMaterial.includes(item);
      });
      setRequestList(final);
    }
  };

  const onClickRefresh = () => {
    setMaterial([]);
    setMethod([]);
  };

  return (
    <MainWrapper>
      <Header>
        <div>
          <h2>들어온 요청</h2>
          <span>파트너님에게 딱 맞는 요청서를 찾아보세요</span>
        </div>
        <FilterWrapper>
          <div>
            <SelectUI
              width={200}
              categoryData={METHOD}
              label={"가공방식"}
              category={method}
              setCategory={setMethod}
            />
            <SelectUI
              width={100}
              categoryData={MATERIAL}
              label={"재료"}
              category={material}
              setCategory={setMaterial}
            />
            <Refresh onClick={onClickRefresh}>
              <div>
                <img src="/images/refresh_24px.png" alt="" />
              </div>
              <span>필터링 리셋</span>
            </Refresh>
          </div>
          <ToogleWrapper>
            <Toogle
              label="상담 중인 요청만 보기"
              condition={condition}
              setCondition={setCondition}
            />
          </ToogleWrapper>
        </FilterWrapper>
      </Header>
      <Main>
        {condition
          ? requestList
              .filter((el) => el.status === "상담중")
              .map((item) => (
                <ItemWrapper key={uuidv4()}>
                  <header>
                    <Title>{item.title}</Title>
                    <Status>{item.status}</Status>
                  </header>
                  <span>{item.client}</span> <br />
                  <Due>{item.due}까지 납기</Due>
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
                    <DetailButton>요청내역보기</DetailButton>
                    <ChatButton>채팅하기</ChatButton>
                  </footer>
                </ItemWrapper>
              ))
          : requestList.map((item) => (
              <ItemWrapper key={uuidv4()}>
                <header>
                  <Title>{item.title}</Title>
                  {item.status === "상담중" && <Status>{item.status}</Status>}
                </header>
                <span>{item.client}</span> <br />
                <Due>{item.due}까지 납기</Due>
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
                  <DetailButton>요청내역보기</DetailButton>
                  <ChatButton>채팅하기</ChatButton>
                </footer>
              </ItemWrapper>
            ))}
      </Main>
    </MainWrapper>
  );
};

export default RequestList;
