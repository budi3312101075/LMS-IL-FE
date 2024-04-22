import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import LoginBtn from "../components/login/LoginBtn";

const Login = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <img
        className="absolute h-screen w-2/5 -z-10 hidden xl:block"
        src="./BackgroundLogin.png"
        alt=""
      />
      <div className="flex">
        <div className="w-2/5 h-screen px-14 py-5 hidden xl:block">
          <div className="text-white">
            <h1 className="font-semibold text-xl">
              Learning Management System
            </h1>
            <p>#AnyoneAnything</p>
          </div>
          <Carousel
            className="mt-10"
            responsive={responsive}
            removeArrowOnDeviceType={[
              "superLargeDesktop",
              "desktop",
              "tablet",
              "mobile",
            ]}
            autoPlay={true}
            autoPlaySpeed={1500}
            infinite={true}
          >
            <div className="bg-[rgba(255,255,255,0.15)] max-h-max w-11/12 ml-5 flex flex-col px-10 rounded-2xl gap-6">
              <img
                className="w-14 absolute top-16 right-1"
                src="./100.png"
                alt=""
              />
              <img
                className="w-14 absolute top-52 left-1"
                src="./emoticon.png"
                alt=""
              />
              <h1 className="text-xl text-white w-64 poppins-regular pt-7 ">
                Unlock your potential with our cutting-edge Learning Management
                System
              </h1>
              <div className="w-full flex items-end justify-end mt-5">
                <img className=" h-96 w-80" src="./Lauren.png" alt="" />
              </div>
            </div>
            {/* crousel slide ke 2 */}
          </Carousel>
        </div>
        <div className="xl:w-3/5 w-full bg-white lg:px-40  px-10 py-28 flex justify-center  h-screen">
          <div className="xl:w-4/5 w-full">
            <h1 className="text-2xl text-black font-bold">Login 🙌</h1>
            <h3 className="text-lg text-black mt-3">
              Please Fill in Login Information
            </h3>
            <div className="flex flex-col mt-5 gap-3">
              <h1 className="text-base font-semibold text-gray-500">
                Email or Username
              </h1>
              <input
                type="text"
                className="input input-bordered w-full bg-transparent border-2 border-gray-300"
              />
            </div>
            <div className="flex flex-col mt-5 gap-3">
              <h1 className="text-base font-semibold text-gray-500">
                Password
              </h1>
              <input
                type="text"
                className="input input-bordered w-full bg-transparent border-2 border-gray-300"
              />
            </div>
            <p className="text-lg pt-4 text-right text-[#5B21B6] mb-6">
              Forgot Password?
            </p>
            <LoginBtn />
            <p className="text-sm text-center pt-4 mt-14">
              ©2024 Infinite Learning All Right Reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
