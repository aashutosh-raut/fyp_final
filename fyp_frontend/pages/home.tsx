/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable @next/next/link-passhref */
import Link from "next/link";
import NavBar from "../components/NavBar";
import Image from "next/image";
import { getId } from "../utils/auth";

const home = () => {
  return (
    <>
      <NavBar />
      <section className="header relative pt-16 items-center flex h-screen max-h-860-px">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="pt-32 sm:pt-0">
              <h2 className="font-semibold text-4xl text-blueGray-600">
                Rent IT - You're next renting destination
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                Rent IT is upscaled web application built to rent products, chat
                with consumers and vendors, and many more.
              </p>
              <div className="mt-12">
                <Link href="/products/products-list">
                  <a
                    style={{ backgroundColor: "#DBE4C6" }}
                    href="/products/products-list"
                    target="_blank"
                    className="get-started text-black font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 active:bg-blueGray-500 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                  >
                    Get started
                  </a>
                </Link>

                {Boolean(getId()) ? (
                  <>
                    {/* <Link href="/products/post-product">
                      <a
                        href="/products/post-product"
                        className="github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-gray-800 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
                      >
                        Post Products
                      </a>
                    </Link> */}
                  </>
                ) : (
                  <Link href="/auth/login">
                    <a
                      className="github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-gray-800 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
                      target="_blank"
                    >
                      Login
                    </a>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
        <img
          className="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860-px"
          src="/img/pattern.png"
          alt="..."
        />
      </section>
    </>
  );
};

export default home;
