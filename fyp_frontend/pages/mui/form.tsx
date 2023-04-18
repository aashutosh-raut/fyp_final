import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Switch from "@mui/material/Switch";
import { useState } from "react";
import { Button } from "@mui/material";

const label = { inputProps: { "aria-label": "Switch demo" } };

export default function FormPropsTextFields() {
  const [checked, setChecked] = useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-basic"
          label="Text Area Name"
          variant="outlined"
        />
      </div>
      <div>
        <h1>
          Available
          <Switch checked={checked} onChange={handleChange} defaultChecked />
        </h1>
      </div>
      <div>
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Hello World"
        />
        <TextField
          disabled
          id="outlined-disabled"
          label="Disabled"
          defaultValue="Hello World"
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        <TextField
          id="outlined-read-only-input"
          label="Read Only"
          defaultValue="Hello World"
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="outlined-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField id="outlined-search" label="Search field" type="search" />
        <TextField
          id="outlined-helperText"
          label="Helper text"
          defaultValue="Default Value"
          helperText="Some important text"
        />
      </div>
      <div>
        <Button variant="outlined" color="primary">
          Submit
        </Button>
      </div>
    </Box>
  );
}
