import { Dispatch } from "react";

export interface SelectProps {
  width: number;
  categoryData: string[];
  label: string;
  category: string[];
  setCategory: Dispatch<React.SetStateAction<string[]>>;
}
