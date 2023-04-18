import React, { useEffect, useState } from "react";
import { Transition } from "@headlessui/react";
import { deleteId, deleteToken, getId, getToken, setId } from "../utils/auth";
import Link from "next/link";
import { useGetUserDetailQuery } from "../generated/graphql";
import { useRouter } from "next/router";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [{ data, fetching, error }] = useGetUserDetailQuery({
    variables: { userid: getId() },
  });
  if (data) console.log(data.user?.userRoleName);
  useEffect(() => {
    if (data?.user?.userRoleName == "ADMIN") setIsAdmin(true);
  }, [data]);

  const router = useRouter();

  return (
    <div>
      <nav style={{ backgroundColor: "#94AF9F" }} className="">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div
                className="flex-shrink-0"
                onClick={() => router.push("/home")}
              >
                <img
                  className="h-9 w-9"
                  src="https://img.icons8.com/dusk/256/registered-trademark.png"
                  alt="Workflow"
                />
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link href="/home">
                    <a className=" hover:bg-white hover:text-purple-600 text-white px-3 py-2 rounded-md text-sm font-medium">
                      Home
                    </a>
                  </Link>

                  <Link href="/products/products-list">
                    <a className="hover:bg-white hover:text-purple-600 text-white px-3 py-2 rounded-md text-sm font-medium">
                      Products
                    </a>
                  </Link>

                  <Link href="/users/userslist">
                    <a className="hover:bg-white hover:text-purple-600 text-white px-3 py-2 rounded-md text-sm font-medium">
                      Users
                    </a>
                  </Link>

                  {Boolean(getId()) ? (
                    <>
                      {isAdmin ? (
                        <Link href={`/admin/reported`}>
                          <a className="hover:bg-white hover:text-purple-600 text-white px-3 py-2 rounded-md text-sm font-medium">
                            Reports
                          </a>
                        </Link>
                      ) : (
                        <></>
                      )}

                      <Link href={`/users/${getId()}`}>
                        <a className="hover:bg-white hover:text-purple-600 text-white px-3 py-2 rounded-md text-sm font-medium">
                          Profile
                        </a>
                      </Link>

                      <Link href="/home">
                        <a
                          className="hover:bg-white hover:text-purple-600 text-white px-3 py-2 rounded-md text-sm font-medium"
                          onClick={() => {
                            deleteId();
                            deleteToken();
                          }}
                        >
                          Sign Out
                        </a>
                      </Link>
                    </>
                  ) : (
                    <Link href="/auth/login">
                      <a className="hover:bg-white hover:text-purple-600 text-white px-3 py-2 rounded-md text-sm font-medium">
                        Sign In
                      </a>
                    </Link>
                  )}
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link href="/home">
                  <a className="hover:bg-neutral-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                    Home
                  </a>
                </Link>

                <Link href="/products/products-list">
                  <a className="hover:bg-neutral-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                    Products
                  </a>
                </Link>

                <Link href="/users/userslist">
                  <a className="hover:bg-neutral-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                    Users
                  </a>
                </Link>

                {Boolean(getId()) ? (
                  <>
                    <Link href={`/users/${getId()}`}>
                      <a className="hover:bg-neutral-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                        Profile
                      </a>
                    </Link>

                    <Link href="/home">
                      <a
                        className="hover:bg-neutral-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                        onClick={() => {
                          deleteId();
                          deleteToken();
                        }}
                      >
                        Sign Out
                      </a>
                    </Link>
                  </>
                ) : (
                  <Link href="/auth/login">
                    <a className="hover:bg-neutral-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                      Sign In
                    </a>
                  </Link>
                )}
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default NavBar;
