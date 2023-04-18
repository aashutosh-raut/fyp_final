import { InputAdornment, TextField } from "@mui/material";

interface NumberInputProps {
  value: { no: number; error: string };
  label: string;
  adorment: string;
  setValue: (props: { no: number; error: string }) => void;
}

const NumberInput: React.FC<NumberInputProps> = ({
  value,
  label,
  setValue,
  adorment,
}) => {
  return (
    <TextField
      id="outlined-basic"
      label={label}
      variant="outlined"
      value={value?.no}
      helperText={value?.error}
      error={Boolean(value.error)}
      className="h-14 w-56 mb-7 mr-5"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">{adorment}</InputAdornment>
        ),
      }}
      onChange={(e) => {
        if (!isNaN(+e.target.value))
          setValue({ no: +e.target.value, error: "" });
      }}
      // if (!isNaN(+e.target.value)) setRentingPrice(+e.target.value);
    />
  );
};

export default NumberInput;
