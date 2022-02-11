import axios from "axios";
import { useEffect, useState } from "react";
import SelectUI from "../../commons/select/Select.container";
import Toogle from "../../commons/toggle/Toggle.container";
import { MainWrapper, Header, Main } from "./RequestList.styles";

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

  const c = () => {
    console.log(requestList);
  };

  return (
    <MainWrapper>
      <Header>
        <h3>들어온 요청</h3>
        <span>파트너님에게 딱 맞는 요청서를 찾아보세요</span>
        <SelectUI
          categoryData={METHOD}
          label={"가공방식"}
          category={method}
          setCategory={setMethod}
        />
        <SelectUI
          categoryData={MATERIAL}
          label={"재료"}
          category={material}
          setCategory={setMaterial}
        />
        <Toogle
          label="상담 중인 요청만 보기"
          condition={condition}
          setCondition={setCondition}
        />
      </Header>
      <Main>
        {condition
          ? requestList
              .filter((el) => el.status === "상담중")
              .map((item) => <div key={item.id}></div>)
          : requestList
              .filter((el) => el.status === "대기중")
              .map((item) => <div key={item.id}></div>)}
      </Main>
    </MainWrapper>
  );
};

export default RequestList;
