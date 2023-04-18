import { useState } from "react";
import {
  useCreateUserMutation,
  useUploadPictureMutation,
} from "../../generated/graphql";
import { setId, setToken } from "../../utils/auth";
import { useRouter } from "next/router";
import Dropzone from "react-dropzone";
import { Avatar, Button } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import SvgRegister from "../../components/iconComponents/SvgRegister";
import StringInput from "../../components/inputComponents/StringInput";
import PasswordInput from "../../components/inputComponents/PasswordInput";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const INITIAL = { text: "", error: "" };

function Register() {
  const [username, setUsername] = useState(INITIAL);
  const [email, setEmail] = useState(INITIAL);
  const [password, setPassword] = useState(INITIAL);
  const [profilePictureUrl, setProfilePicture] = useState("");
  const [, registerUser] = useCreateUserMutation();
  const router = useRouter();

  const [, uploadPicture] = useUploadPictureMutation();

  const handleDrop = async (files: File[]) => {
    const imgData = await uploadPicture({ file: files[0] });
    if (imgData.data) setProfilePicture(imgData.data.postPicture);
  };

  const handleSubmit = async () => {
    const { error, data } = await registerUser({
      username: username.text.trim(),
      email: email.text.trim(),
      password: password.text,
      profilePictureUrl,
    });

    if (error?.message) console.log("Message", error.message);

    // if (error?.message) toast.error(error.message);

    if (error?.message) toast.error("Username or Email already exists!");

    if (data?.createUser.token) setToken(data?.createUser.token);
    if (data?.createUser.id) setId(data?.createUser.id);

    if (data?.createUser.token) {
      toast.success("User Registered Successfully!");
      router.push("/products/products-list");
    }
  };

  return (
    <div style={{ backgroundColor: "#94AF9F" }} className="md:flex md:flex-row">
      <div className="hidden md:flex md:justify-center md:items-center md:h-screen md:w-6/12">
        <img className="ml-20 aspect-auto" src="/img/register.png" alt="..." />
      </div>

      <div className="flex flex-col justify-center items-center h-screen md:w-6/12">
        <h1 className="text-2xl my-7">Register User</h1>

        <Avatar
          alt="Remy Sharp"
          src={profilePictureUrl}
          className="mb-4 h-24 w-24"
        />

        <StringInput value={username} setValue={setUsername} label="Username" />

        <StringInput value={email} setValue={setEmail} label="Email" />

        <PasswordInput value={password} setValue={setPassword} />

        <Dropzone onDrop={(acceptedFiles) => handleDrop(acceptedFiles)}>
          {({ getRootProps, getInputProps }) => (
            <section>
              <div
                {...getRootProps()}
                className="h-14 w-56 mb-4 border-dashed border-2 border-cyan-400"
              >
                <input {...getInputProps()} />
                <p className="text-center">
                  Drag 'n' drop User Profile or Click to select file.
                </p>
              </div>
            </section>
          )}
        </Dropzone>

        <Button
          style={{ backgroundColor: "#E9EDC9", color: "black" }}
          variant="outlined"
          onClick={() => {
            if (!username.text) {
              setUsername({ text: username.text, error: "Field is Empty" });
            }
            if (!email.text) {
              setEmail({ text: username.text, error: "Field is Empty" });
            }
            if (!password.text) {
              setPassword({ text: password.text, error: "Field is Empty" });
            }
            if (username.text && email.text && password.text) handleSubmit();
          }}
          className="h-12 w-44 my-5"
        >
          Register
        </Button>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default Register;
