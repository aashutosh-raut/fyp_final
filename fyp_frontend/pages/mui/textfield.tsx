import { Button } from "@mui/material";
import { useCallback, useState } from "react";
import StringInput from "../../components/inputComponents/StringInput";
// import checkValid from "../../utils/checkvalid";

const INITIAL = { text: "", error: "" };

const textfield = () => {
  const [username, setUserName] = useState(INITIAL);

  const handleSubmit = useCallback(async () => {
    // checkValid(username, setUserName);
  }, []);
  return (
    <div>
      <StringInput value={username} setValue={setUserName} label="User Input" />

      <Button
        variant="outlined"
        onClick={handleSubmit}
        className="h-12 w-44 my-5"
      >
        Login
      </Button>
    </div>
  );
};

export default textfield;
