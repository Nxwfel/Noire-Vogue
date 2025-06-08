import React from 'react'
import Bg from '../Assets/Bg3.png'
import {Link} from "react-router-dom";
const ClientSignin = () => {
  return (
    <div className='flex flex-col h-screen w-screen items-center justify-center '
        style={{ backgroundImage: `url(${Bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <Link to={"/"} 
        className='mr-auto'>
        <button
                  class="bg-transparent mr-auto ml-2 mb-10 text-center w-48 rounded-2xl h-14 relative text-white cursor-pointer text-xl font-syne font-semibold group"
                  type="button"
                >
                  <div
                    class="bg-green-600 rounded-xl h-12 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[184px] z-10 duration-500"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 1024 1024"
                      height="25px"
                      width="25px"
                    >
                      <path
                        d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
                        fill="#000000"
                      ></path>
                      <path
                        d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
                        fill="#000000"
                      ></path>
                    </svg>
                  </div>
                  <p class="translate-x-2">Go Back</p>
                </button>
      </Link>
<section>
  <div
    class="flex bg-white rounded-2xl items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-8"
  >
    <div class="xl:mx-auto xl:w-full shadow-md p-4 xl:max-w-sm 2xl:max-w-md">
      <div class="mb-2 flex justify-center"></div>
      <h2 class="text-center text-2xl font-bold leading-tight text-black">
        Sign in to your account
      </h2>
      <p class="mt-2 text-center text-sm text-gray-600">
        Don't have an account? <Link to={"/signup"} className='text-black'>Create a free account</Link>
      </p>
      <form class="mt-8" method="POST" action="#">
        <div class="space-y-5">
          <div>
            <label class="text-base font-medium text-gray-900">
              Email address
            </label>
            <div class="mt-2">
              <input
                placeholder="Email"
                type="email"
                class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>
          </div>
          <div>
            <div class="flex items-center justify-between">
              <label class="text-base font-medium text-gray-900">
                Password
              </label>
              <a
                class="text-sm font-semibold text-black hover:underline"
                title=""
                href="#"
              >
                Forgot password?
              </a>
            </div>
            <div class="mt-2">
              <input
                placeholder="Password"
                type="password"
                class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>
          </div>
          <div>
            <button
              class="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
              type="button"
            >
              Get started
            </button>
          </div>
        </div>
      </form>
      <div class="mt-3 space-y-3">
        <button
          class="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
          type="button"
        >
          <span class="mr-2 inline-block">
            <svg
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-rose-500"
            >
              <path
                d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"
              ></path>
            </svg>
          </span>
          Sign in with Google
        </button>
      </div>
    </div>
  </div>
</section>


    </div>
  )
}

export default ClientSignin