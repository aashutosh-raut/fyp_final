import { useCallback, useEffect, useState } from "react";
// import { useSignInUserMutation } from "../../generated/graphql";
import { setId, setToken } from "../../utils/auth";
import { useSignInUserMutation } from "../../generated/graphql";
import { useRouter } from "next/router";
import { Button, Link } from "@mui/material";
import React from "react";
import SvgLogin from "../../components/iconComponents/SvgLogin";
import StringInput from "../../components/inputComponents/StringInput";
import PasswordInput from "../../components/inputComponents/PasswordInput";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import checkValid from "../../utils/checkvalid";

const INITIAL = { text: "", error: "" };

const Login = () => {
  const [username, setUsername] = useState(INITIAL);
  const [password, setPassword] = useState(INITIAL);
  const [, signInUser] = useSignInUserMutation();
  const router = useRouter();

  const loginUser = async () => {
    const { data, error } = await signInUser({
      username: username.text.trim(),
      password: password.text,
    });

    if (error?.message) toast.error(error?.message.slice(10));

    if (data?.signInUser.token) setToken(data?.signInUser.token);
    if (data?.signInUser.id) setId(data?.signInUser.id);

    if (data?.signInUser.token) {
      toast.success("Login in successful");
      router.push("/products/products-list");
    }
  };

  // const validation = useCallback(async () => {
  //   checkValid(username, setUsername);
  //   checkValid(password, setPassword);
  //   console.log(username, password);
  // }, []);

  return (
    <div style={{ backgroundColor: "#E9EDC9" }} className="md:flex md:flex-row">
      <div className="hidden md:flex md:justify-center md:items-center md:h-screen md:w-6/12">
        <SvgLogin className="ml-20 aspect-auto" width={600} />
        <img className="ml-20 aspect-auto" src="/img/login.png" alt="..." />
      </div>

      <div className="flex flex-col justify-center items-center h-screen md:w-6/12">
        <h1 className="text-2xl mb-7">Sign in to Rent IT</h1>

        <StringInput value={username} setValue={setUsername} label="Username" />

        <PasswordInput value={password} setValue={setPassword} />

        <h1>
          Have not Registered?{" "}
          <Link href="./register">
            <a>Register Here</a>
          </Link>
        </h1>

        <Button
          variant="outlined"
          style={{ backgroundColor: "#94AF9F", color: "white" }}
          onClick={() => {
            // validation();
            if (!username.text)
              setUsername({ text: username.text, error: "Field is Empty" });
            if (!password.text)
              setPassword({ text: password.text, error: "Field is Empty" });
            if (username.text && password.text) loginUser();
          }}
          className="h-12 w-44 my-5"
        >
          Login
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
};

export default Login;
