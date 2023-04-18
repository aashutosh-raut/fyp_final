type InitialType = { text: string; error: string };

const checkValid = (
  value: InitialType,
  setValue: React.Dispatch<React.SetStateAction<InitialType>>
  // validator: (val: string) => boolean
) => {
  if (!value.text) {
    setValue({ ...value, error: "Field is empty" });
  }
  // if (typeof validator === "function" && !validator(value.text)) {
  //     setValue({ ...value, error: "This is invalid" });
  //     return false;
  // }
};

export default checkValid;
