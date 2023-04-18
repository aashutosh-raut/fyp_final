import { TextField } from "@mui/material";

interface StringInputProps {
  value: { text: string; error: string };
  label: string;
  setValue: (props: { text: string; error: string }) => void;
  isMultiline?: boolean;
  isModal?: boolean;
}

const StringInput: React.FC<StringInputProps> = ({
  value,
  label,
  setValue,
  isMultiline,
  isModal,
}) => {
  return (
    <TextField
      id="outlined-basic"
      label={label}
      variant="outlined"
      value={value?.text}
      helperText={value?.error}
      multiline={isMultiline}
      error={Boolean(value.error)}
      className={isModal ? "h-16 w-full mb-7 mr-5" : "h-14 w-56 mb-7 mr-5"}
      onChange={(e) => {
        setValue({ text: e.target.value, error: "" });
      }}
      rows={isMultiline ? 2 : 1}
    />
  );
};

StringInput.defaultProps = {
  isMultiline: false,
  isModal: false,
};

export default StringInput;
