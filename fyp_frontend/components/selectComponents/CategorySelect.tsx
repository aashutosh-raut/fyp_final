import { MenuItem, TextField } from "@mui/material";
import { CategoryNameEnum } from "../../generated/graphql";

var S = require("string");
import * as _ from "lodash";

interface CategorySelectProps {
  value: { text: CategoryNameEnum; error: string };
  setValue: (props: { text: CategoryNameEnum; error: string }) => void;
}

const CategorySelect: React.FC<CategorySelectProps> = ({ value, setValue }) => {
  const productCategories = Object.keys(CategoryNameEnum) as CategoryNameEnum[];
  return (
    <TextField
      id="outlined-select-category"
      select
      label="Category"
      value={value.text}
      onChange={(e) =>
        setValue({
          text: e.target.value as CategoryNameEnum,
          error: "",
        })
      }
      error={Boolean(value.error)}
      helperText={value?.error}
      className="h-14 w-56 mb-7 mr-5"
    >
      {productCategories.map((category) => (
        <MenuItem key={category} value={_.snakeCase(category).toUpperCase()}>
          {S(category).humanize().s}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default CategorySelect;
