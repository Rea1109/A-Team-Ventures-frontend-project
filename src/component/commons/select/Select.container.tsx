import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import { SelectProps } from "./Select.types";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default function SelectUI(props: SelectProps) {
  const handleChangeMethod = (
    event: SelectChangeEvent<typeof props.category>
  ) => {
    const value = event.target.value;
    props.setCategory(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <FormControl
      sx={{ m: 1, width: props.width }}
      style={{ margin: "0px 10px 20px 0px" }}
    >
      <InputLabel id="demo-multiple-checkbox-label">{props.label}</InputLabel>
      <Select
        labelId="demo-multiple-checkbox-label"
        id="demo-multiple-checkbox"
        multiple
        value={props.category}
        onChange={handleChangeMethod}
        input={<OutlinedInput label={props.label} />}
        renderValue={
          props.label === "재료"
            ? () => `${props.label} (${props.category.length})`
            : (selected) => selected.join(", ")
        }
        MenuProps={MenuProps}
      >
        {props.categoryData.map((el) => (
          <MenuItem key={el} value={el}>
            <Checkbox checked={props.category.indexOf(el) > -1} />
            <ListItemText primary={el} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
