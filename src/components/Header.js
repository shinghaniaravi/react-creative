import React from 'react'
const Header = () => {
  return (
    <div>
    <header>
    <nav className="banner">
      <div
        className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 container mx-auto"
      >
        <a href="#" className="flex items-center py-4">
          <img src="/images/logo.png" className="h-8 mr-3" alt="Flowbite Logo" />
        </a>
        <ul
          className="font-medium flex flex-row md:p-0 gap-2 md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 text-sm"
        >
          <li>
            <a
              href="#history"
              className="block pl-3 pr-4 text-white bg-white-700 md:bg-transparent md:text-white md:p-0 dark:text-white md:dark:text-white border-b-2 border-white text-sm text-font font-black"
              aria-current="page"
              >01. history</a>
          </li>
          <li>
            <a
              href="#team"
              className="block pl-3 pr-4 text-white bg-white-700 md:bg-transparent md:text-white md:p-0 dark:text-white md:dark:text-white border-b-2 border-white font-black"
              >02. team</a>
          </li>
        </ul>
      </div>
    </nav>
      <nav className="bg-white border-gray-200 dark:bg-gray-900 sticky top-0">
        <div
          className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 container mx-auto"
        >
          <a to="https://flowbite.com/" className="">
            <p className="text-xl text-black-1">LOSANGELES</p>
            <p className="text-xl text-blue-1">MOUNTAINS</p>
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul
              className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
            >
              <li>
                <a
                  href="#history"
                  className="block py-2 pl-3 pr-4 text-blue-1 bg-white-700 md:bg-transparent md:text-blue-1-700 md:p-0 dark:text-blue-1 md:dark:text-blue-1-400 border-b-2 border-blue-1 text-sm font-black"
                  aria-current="page"
                  >01. history</a>
              </li>
              <li>
                <a
                  href="#team"
                  className="block py-2 pl-3 pr-4 text-blue-1 bg-white-700 md:bg-transparent md:text-blue-1-700 md:p-0 dark:text-blue-1 md:dark:text-blue-1-400 border-b-2 border-blue-1 text-sm font-black"
                  >02. team</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    </div>
  )
}

export default Header