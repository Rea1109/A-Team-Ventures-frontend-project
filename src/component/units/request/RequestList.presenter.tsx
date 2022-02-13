import SelectUI from "../../commons/select/Select.container";
import Toogle from "../../commons/toggle/Toggle.container";
import RequestListItem from "../requestItem/RequestListItem.container";
import * as S from "./RequestList.styles";
import { RequestListUIProps } from "./RequestList.types";

const METHOD = ["밀링", "선반"];
const MATERIAL = [
  "알루미늄",
  "탄소강",
  "구리",
  "합금강",
  "강철",
  "스테인리스강",
];

const RequestListUI = (props: RequestListUIProps) => {
  return (
    <S.MainWrapper>
      <S.Header>
        <div>
          <h2>들어온 요청</h2>
          <span>파트너님에게 딱 맞는 요청서를 찾아보세요</span>
        </div>
        <S.FilterWrapper>
          <div>
            <SelectUI
              width={200}
              categoryData={METHOD}
              label={"가공방식"}
              category={props.method}
              setCategory={props.setMethod}
            />
            <SelectUI
              width={100}
              categoryData={MATERIAL}
              label={"재료"}
              category={props.material}
              setCategory={props.setMaterial}
            />
            <S.Refresh onClick={props.onClickRefresh}>
              <div>
                <img src="/images/refresh_24px.png" alt="" />
              </div>
              <span>필터링 리셋</span>
            </S.Refresh>
          </div>
          <S.ToogleWrapper>
            <Toogle
              label="상담 중인 요청만 보기"
              condition={props.condition}
              setCondition={props.setCondition}
            />
          </S.ToogleWrapper>
        </S.FilterWrapper>
      </S.Header>
      <S.Main>
        {props.requestList.filter((el) =>
          props.condition ? el.status === "상담중" : el
        ).length === 0 ? (
          <S.RequestListDefaultView>
            조건에 맞는 견적 요청이 없습니다.
          </S.RequestListDefaultView>
        ) : (
          <RequestListItem
            condition={props.condition}
            requestList={props.requestList}
          />
        )}
      </S.Main>
    </S.MainWrapper>
  );
};

export default RequestListUI;
