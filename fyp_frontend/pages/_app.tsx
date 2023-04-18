import "../styles/globals.css";
import type { AppProps } from "next/app";
import { withUrqlClient } from "next-urql";
import { UrqlClient } from "../utils/urqlClient";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
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
    </>
  );
}

export default withUrqlClient(UrqlClient)(MyApp);
