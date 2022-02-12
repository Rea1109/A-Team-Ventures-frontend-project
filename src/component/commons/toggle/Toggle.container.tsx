import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { Dispatch } from "react";

export default function Toogle({
  label,
  condition,
  setCondition,
}: {
  label: string;
  condition: boolean;
  setCondition: Dispatch<React.SetStateAction<boolean>>;
}) {
  const onChangeToogle = () => {
    setCondition(!condition);
  };

  return (
    <FormControlLabel
      control={<Switch />}
      onChange={onChangeToogle}
      label={label}
    />
  );
}
