import Image from 'next/image';
import React from 'react';

function accountpage() {
  return (
    <>
      <div className="h-screen">
        <div className="top-0 flex flex-wrap h-5/6">
          <div className="flex flex-col basis-1/3 ">
            <div className="absolute py-8 rounded-md h- w-80 bg-slate-100 left-32 top-28">
              <div className="flex flex-col justify-center">
                <Image
                  alt="profile"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTftipWdyK514LenkAJmM-78YfYb-rx8Mdzrw&usqp=CAU"
                  className="object-cover w-32 h-32 mx-auto rounded-full"
                />
                <input type="submit" value="Upload a photo" />
              </div>
              <div className="px-10 pt-7">
                <p className="pb-3 font-bold ">Identity Verification</p>
                <p>
                  So I started to walk into the water. I wont lie to you boys, I
                  was terrified
                </p>
              </div>
              <div className="px-10  pt-7">
                <p className="pb-3 text-2xl font-bold">John Duo</p>
                <p className="">Email confirmed</p>
                <p className="">Mobile confirmed</p>
              </div>
            </div>
          </div>
          <div className="basis-1/3">
            <div className="absolute rounded-md h-94 w-80 top-28">
              <p className="pb-3 text-2xl font-bold">Hello, John Duo</p>
              <p className="pb-5">Email confirmed</p>
              <form className="pb-3">
                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm text-gray-700"
                    htmlFor="name"
                  >
                    Display Name
                    <input
                      className="w-full px-3 py-2 font-light leading-tight text-gray-800 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="displayname"
                      type="text"
                      placeholder="Display Name"
                    ></input>
                  </label>
                </div>
                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm text-gray-700"
                    htmlFor="email"
                  >
                    Email
                    <input
                      className="w-full px-3 py-2 font-light leading-tight text-gray-800 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="email"
                      type="text"
                      placeholder="you.@gmail.com"
                    ></input>
                  </label>
                </div>

                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm text-gray-700"
                    htmlFor="Gender"
                  >
                    Gender
                    <input
                      className="w-full px-3 py-2 font-light leading-tight text-gray-800 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="Twitter"
                      type="text"
                      placeholder="-"
                    ></input>
                  </label>
                </div>
                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm text-gray-700"
                    htmlFor="Twitter"
                  >
                    Twitter
                    <input
                      className="w-full px-3 py-2 font-light leading-tight text-gray-800 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="Twitter"
                      type="text"
                      placeholder="@twitter_uername"
                    ></input>
                  </label>
                </div>
                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm text-gray-700"
                    htmlFor="linkedin"
                  >
                    Linkedin
                    <input
                      className="w-full px-3 py-2 font-light leading-tight text-gray-800 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="linkedin"
                      type="text"
                      placeholder="https://www.linkedin.com/"
                    ></input>
                  </label>
                </div>
              </form>
            </div>
          </div>
          <div className="basis-1/3">
            <div className="absolute rounded-md h-94 w-80 top-44">
              <p className="pb-3 text-2xl font-bold"></p>
              <p className="pb-5"></p>
              <form className="pb-3">
                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm text-gray-700"
                    htmlFor="age"
                  >
                    Age
                    <input
                      className="w-full px-3 py-2 font-light leading-tight text-gray-800 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="age"
                      type="text"
                      placeholder="22"
                    ></input>
                  </label>
                </div>
                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm text-gray-700"
                    htmlFor="phone"
                  >
                    Phone
                    <input
                      className="w-full px-3 py-2 font-light leading-tight text-gray-800 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="phone"
                      type="text"
                      placeholder="1234.1234.1234"
                    ></input>
                  </label>
                </div>
                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm text-gray-700"
                    htmlFor="UserName"
                  >
                    UserName
                    <input
                      className="w-full px-3 py-2 font-light leading-tight text-gray-800 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="UserName"
                      type="text"
                      placeholder=""
                    ></input>
                  </label>
                </div>
                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm text-gray-700"
                    htmlFor="facebook"
                  >
                    Facebook URL
                    <input
                      className="w-full px-3 py-2 font-light leading-tight text-gray-800 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="Facebook"
                      type="text"
                      placeholder="URL"
                    ></input>
                  </label>
                </div>
                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm text-gray-700"
                    htmlFor="instagram"
                  >
                    Instagram
                    <input
                      className="w-full px-3 py-2 font-light leading-tight text-gray-800 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="Instagram"
                      type="text"
                      placeholder="@userintagram"
                    ></input>
                  </label>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <div className="text-center">
            <button className="px-4 py-2 font-semibold text-gray-800 bg-white border border-gray-400 rounded shadow hover:bg-gray-100">
              Edit profile
            </button>
          </div>
          <a className="pt-6 text-center" href="#">
            Check in by you
          </a>
        </div>
      </div>
    </>
  );
}

export default accountpage;
