import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  MenuItem,
  TextField,
} from "@mui/material";
import { useState } from "react";
import {
  CategoryNameEnum,
  ProductConditionEnum,
} from "../../generated/graphql";
var S = require("string");
import * as _ from "lodash";

const checkbox = () => {
  const productCategories = Object.keys(CategoryNameEnum) as CategoryNameEnum[];
  const productConditions = Object.keys(
    ProductConditionEnum
  ) as ProductConditionEnum[];

  const [condition, setCondition] = useState("" as ProductConditionEnum);
  const [productCategory, setProductCategory] = useState(
    "" as CategoryNameEnum
  );

  const [conditionFilter, setConditionFilter] = useState<
    ProductConditionEnum[]
  >([]);

  const [categoryFilter, setCategoryFilter] = useState<CategoryNameEnum[]>([]);

  console.log("Categories", categoryFilter);
  //   console.log("Condition", conditionFilter);

  return (
    <div>
      <div className="flex justify-center items-center">
        <TextField
          id="outlined-select-category"
          select
          label="Category"
          value={productCategory}
          onChange={(e) =>
            setProductCategory(e.target.value as CategoryNameEnum)
          }
          helperText="Please select product category"
          className="h-14 w-56 mb-7 mr-5"
        >
          {productCategories.map((category) => (
            <MenuItem
              key={category}
              value={_.snakeCase(category).toUpperCase()}
            >
              {S(category).humanize().s}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          id="outlined-select-condition"
          select
          label="Condition"
          value={condition}
          onChange={(e) => setCondition(e.target.value as ProductConditionEnum)}
          helperText="Please select product condition"
          className="h-14 w-56 mb-7 mr-5"
        >
          {productConditions.map((condition) => (
            <MenuItem
              key={condition}
              value={_.snakeCase(condition).toUpperCase()}
            >
              {S(condition).humanize().s}
            </MenuItem>
          ))}
        </TextField>
      </div>
      <div>
        <h1>Checkboxes for storing Arrays</h1>

        <div className="flex ">
          <FormGroup>
            {productConditions.map((condition) => (
              <FormControlLabel
                key={condition}
                control={<Checkbox />}
                label={condition}
                onChange={() => {
                  if (conditionFilter.includes(condition)) {
                    console.log("first");
                    setConditionFilter([
                      ...conditionFilter.filter((opt) => opt != condition),
                    ]);
                    return;
                  }
                  setConditionFilter([...conditionFilter, condition]);
                }}
              />
            ))}
          </FormGroup>

          <FormGroup>
            {productCategories.map((category) => (
              <FormControlLabel
                key={category}
                control={<Checkbox />}
                label={category}
                onChange={() => {
                  if (categoryFilter.includes(category)) {
                    console.log("first");
                    setCategoryFilter([
                      ...categoryFilter.filter((opt) => opt != category),
                    ]);
                    return;
                  }
                  setCategoryFilter([...categoryFilter, category]);
                }}
              />
            ))}
          </FormGroup>
        </div>
      </div>
    </div>
  );
};

export default checkbox;
