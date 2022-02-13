import { Dispatch, SetStateAction } from "react";
import { ITEM } from "./RequestList.container";

export interface RequestListUIProps {
  method: string[];
  setMethod: Dispatch<SetStateAction<string[]>>;
  material: string[];
  setMaterial: Dispatch<SetStateAction<string[]>>;
  onClickRefresh: () => void;
  condition: boolean;
  setCondition: Dispatch<SetStateAction<boolean>>;
  requestList: ITEM[];
}
