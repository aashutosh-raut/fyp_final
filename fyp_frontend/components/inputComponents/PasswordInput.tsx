import {
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";

interface PasswordInputProps {
  value: { text: string; error: string };
  setValue: (props: { text: string; error: string }) => void;
}

const PasswordInput: React.FC<PasswordInputProps> = ({ value, setValue }) => {
  const [showPassword, setShowPassword] = useState(false);
  console.log("Password Input", value.error);
  return (
    <FormControl className="h-14 w-56 mb-7 mr-5" variant="outlined">
      <InputLabel
        htmlFor="outlined-adornment-password"
        error={Boolean(value.error)}
      >
        Password
      </InputLabel>
      <OutlinedInput
        id="outlined-adornment-password"
        type={showPassword ? "text" : "password"}
        value={value.text}
        onChange={(e) => setValue({ text: e.target.value, error: "" })}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={(e) => setShowPassword(!showPassword)}
              onMouseDown={(e) => e.preventDefault()}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        label="Password"
      />
      <FormHelperText className="text-red-700">
        {value.error || " "}
      </FormHelperText>
    </FormControl>
  );
};

export default PasswordInput;
