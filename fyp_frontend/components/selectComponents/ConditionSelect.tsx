import { MenuItem, TextField } from "@mui/material";
import { ProductConditionEnum } from "../../generated/graphql";

var S = require("string");
import * as _ from "lodash";

interface ConditionSelectProps {
  value: { text: ProductConditionEnum; error: string };
  setValue: (props: { text: ProductConditionEnum; error: string }) => void;
}

const ConditionSelect: React.FC<ConditionSelectProps> = ({
  value,
  setValue,
}) => {
  const productConditions = Object.keys(
    ProductConditionEnum
  ) as ProductConditionEnum[];
  return (
    <TextField
      id="outlined-select-condition"
      select
      label="Condition"
      value={value.text}
      onChange={(e) =>
        setValue({
          text: e.target.value as ProductConditionEnum,
          error: "",
        })
      }
      error={Boolean(value.error)}
      helperText={value?.error}
      className="h-14 w-56 mb-7 mr-5"
    >
      {productConditions.map((condition) => (
        <MenuItem key={condition} value={_.snakeCase(condition).toUpperCase()}>
          {S(condition).humanize().s}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default ConditionSelect;
