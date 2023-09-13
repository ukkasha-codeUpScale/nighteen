import Link from "next/link";
import React, { useState } from "react";
import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsYoutube,
  BsTwitter,
} from "react-icons/bs";

export default function Navbar() {
  const [iconstate, setIconstate] = useState(false);
  const [overly, setOverly] = useState(false);

  return (
    <div className="fixed w-full z-50">
      <div className=" backdrop-filter backdrop-blur-sm flex justify-between p-5 bg-none  items-center">
        <div>Logo</div>
        <div className="flex space-x-4 items-center">
          <Link
            href={""}
            className="font-semibold text-md text-white no-underline"
          >
            About us
          </Link>
          <Link
            href={""}
            className="font-semibold text-md text-white no-underline"
          >
            Experience
          </Link>
          <Link
            href={""}
            className="font-semibold text-md text-white no-underline"
          >
            Cotanct us
          </Link>
          <button className="bg-transparent border border-0.5 py-2 px-10 text-white font-semibold text-md rounded-none ">
            Book Now
          </button>
          <div className="flex ">
            <Link
              href={""}
              className="px-1"
              onClick={() => setIconstate(!iconstate)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 25 25"
                stroke-width="2"
                stroke="white"
                className="w-10 h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </Link>

            <Link href={""} className="px-1" onClick={() => setOverly(!overly)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 25 25"
                stroke-width="2"
                stroke="white"
                className="w-10 h-10"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
      {iconstate ? (
        <div className="absolute top-0 bottom-0 bg-gradient-to-bl from-gray-900  h-screen w-full">
          <div className="flex flex-col justify-center items-end p-20 ">
            <div>
              <Link href={""} onClick={() => setIconstate(!iconstate)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 30 35"
                  stroke-width="3"
                  stroke="white"
                  className="w-16 h-16"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </Link>
            </div>

            <ul className="px-20 py-10 space-y-2 text-end">
              <li>
                <Link
                  href={""}
                  className="text-gray-400  font-semibold text-xl no-underline hover:text-white "
                >
                  THE VILLAS
                </Link>
              </li>
              <li>
                <Link
                  href={""}
                  className="text-gray-400 font-semibold text-xl no-underline hover:text-white "
                >
                  THE HEIGHTS
                </Link>
              </li>
              <li>
                <Link
                  href={""}
                  className="text-gray-400 font-semibold text-xl no-underline hover:text-white "
                >
                  THE CORE
                </Link>
              </li>
              <li>
                <Link
                  href={""}
                  className="text-gray-400 font-semibold text-xl no-underline hover:text-white "
                >
                  MEIDA
                </Link>
              </li>
              <li>
                <Link
                  href={""}
                  className="text-gray-400 font-semibold text-xl no-underline hover:text-white  "
                >
                  BLOG
                </Link>
              </li>

              <li>
                <Link
                  href={""}
                  className="text-gray-400 font-semibold text-xl no-underline hover:text-white  "
                >
                  EXPERIENCE
                </Link>
              </li>

              <li>
                <Link
                  href={""}
                  className="text-gray-400 font-semibold text-xl no-underline hover:text-white  "
                >
                  CSR
                </Link>
              </li>

              <li>
                <Link
                  href={""}
                  className="text-gray-400 font-semibold text-xl no-underline hover:text-white  "
                >
                  CAREERS
                </Link>
              </li>
              <li>
                <Link
                  href={""}
                  className="text-gray-400 font-semibold text-xl no-underline hover:text-white  "
                >
                  DOWNLOAD
                </Link>
              </li>
              <li>
                <Link
                  href={""}
                  className="text-gray-400 font-semibold text-xl no-underline hover:text-white  "
                >
                  CONTACT US
                </Link>
              </li>

              <div className="flex  space-x-4">
                <BsFacebook className="text-3xl text-gray-400 hover:text-white " />
                <BsTwitter className="text-3xl text-gray-400 hover:text-white " />
                <BsInstagram className="text-3xl text-gray-400 hover:text-white " />
                <BsLinkedin className="text-3xl text-gray-400 hover:text-white " />
                <BsYoutube className="text-3xl text-gray-400 hover:text-white " />
              </div>
            </ul>
          </div>
        </div>
      ) : null}

      <div className="ease-in-out">


        <div
          className={`absolute top-0  bg-gradient-to-l from-cyan-800 to-cyan-600 ease-in-out duration-700 bg-blend-darken  w-full ${
            !Boolean(overly) ? "h-[0vh] invisible" : "h-screen "
          }`}
        >
      {overly && (

        <>
            <div className=" flex flex-col justify-center items-end p-20 ">
            
            <Link href={""} onClick={() => setOverly(!overly)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 30 35"
                stroke-width="3"
                stroke="white"
                className="w-16 h-16"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </Link>
          </div>
          <div className="h-screen flex items-center">
            <div className="relative flex items-center w-1/2 mx-auto py-3 justify-center rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
              <div className="grid place-items-center h-full w-12 text-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>

              <input
                className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
                type="text"
                id="search"
                placeholder="Search something.."
              />
            </div>
          </div>
        </>
      )}

          
        </div>


      </div>



    </div>
  );
}
