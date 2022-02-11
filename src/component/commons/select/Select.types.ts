import { Dispatch } from "react";

export interface SelectProps {
  categoryData: string[];
  label: string;
  category: string[];
  setCategory: Dispatch<React.SetStateAction<string[]>>;
}
