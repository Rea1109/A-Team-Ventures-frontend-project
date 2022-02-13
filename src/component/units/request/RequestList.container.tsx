import axios from "axios";
import { useEffect, useState } from "react";
import RequestListUI from "./RequestList.presenter";

export interface ITEM {
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
    <RequestListUI
      method={method}
      setMethod={setMethod}
      material={material}
      setMaterial={setMaterial}
      onClickRefresh={onClickRefresh}
      condition={condition}
      setCondition={setCondition}
      requestList={requestList}
    />
  );
};

export default RequestList;
