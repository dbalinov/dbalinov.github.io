import { useState } from 'react'
import { useTranslation } from "react-i18next"
import Link from "@/components/Link"
import Logo from './Logo'

export default function Header() {
  const { t } = useTranslation("menu")

  const [hiddenMobileMenu, toggleHiddenMobileMenu] = useState(true)
  const [hiddenDataMenu, toggleHiddenDataMenu] = useState(true)
  const [hiddenLangMenu, toggleHiddenLangMenu] = useState(true)

  return <header className="px-2 fixed w-full top-0 left-0 right-0 h-22 z-30 transition-all ease bg-white duration-150 flex py-2 drop-shadow-md">
  {/* bg-good-bg */}
  <div className="container flex flex-wrap items-center justify-between mx-auto">
    <Link href='/'>
      <Logo />
    </Link>
    <button data-collapse-toggle="navbar-multi-level" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-multi-level" aria-expanded="false"
      onClick={() => toggleHiddenMobileMenu(!hiddenMobileMenu)}
    >
      <span className="sr-only">Open main menu</span>
      <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
    </button>
    <div className={`${hiddenMobileMenu ? 'hidden' : ''} w-full md:block md:w-auto`} id={`navbar-multi-level`}>
      <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
        <li>
          <Link href="/" className="block py-2 pl-3 pr-4 rounded md:bg-transparent md:text-blue-700 md:p-0" aria-current="page">{t("home")}</Link>
        </li>
        <li>
          <Link href="/posts" className="block py-2 pl-3 pr-4rounded md:bg-transparent md:text-blue-700 md:p-0" aria-current="page">{t("blog")}</Link>
        </li>
        <li>
          <button onClick={() => toggleHiddenDataMenu(!hiddenDataMenu)}
            className={`flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto`}>
            {t('data')}
            <svg className="w-4 h-4 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
            </svg>
          </button>
          <div className={`z-10 ${hiddenDataMenu ? 'hidden' : ''} absolute font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44`}>
            <ul className="py-2 text-sm text-gray-700">
              <li>
                <Link href="/sebra" className="block px-4 py-2 hover:bg-gray-100">SEBRA</Link>
              </li>
              <li>
                <Link href="/sofia-kindergartens" className="block px-4 py-2 hover:bg-gray-100">Kinder Garden</Link>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <Link href="/team" className="block py-2 pl-3 pr-4 rounded md:bg-transparent md:text-blue-700 md:p-0">{t("team")}</Link>
        </li>
        <li>
          <Link href="/contact" className="block py-2 pl-3 pr-4 rounded md:bg-transparent md:text-blue-700 md:p-0">{t("contact")}</Link>
        </li>
        <li>
          <button id="dropdownNavbarLink" onClick={() => toggleHiddenLangMenu(!hiddenLangMenu)}
            className={`flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto`}>
            <svg
              viewBox="0 0 512 512"
              fill="currentColor"
              height="20"
              width="20"
            >
              <path d="M478.33 433.6l-90-218a22 22 0 00-40.67 0l-90 218a22 22 0 1040.67 16.79L316.66 406h102.67l18.33 44.39A22 22 0 00458 464a22 22 0 0020.32-30.4zM334.83 362L368 281.65 401.17 362zM267.84 342.92a22 22 0 00-4.89-30.7c-.2-.15-15-11.13-36.49-34.73 39.65-53.68 62.11-114.75 71.27-143.49H330a22 22 0 000-44H214V70a22 22 0 00-44 0v20H54a22 22 0 000 44h197.25c-9.52 26.95-27.05 69.5-53.79 108.36-31.41-41.68-43.08-68.65-43.17-68.87a22 22 0 00-40.58 17c.58 1.38 14.55 34.23 52.86 83.93.92 1.19 1.83 2.35 2.74 3.51-39.24 44.35-77.74 71.86-93.85 80.74a22 22 0 1021.07 38.63c2.16-1.18 48.6-26.89 101.63-85.59 22.52 24.08 38 35.44 38.93 36.1a22 22 0 0030.75-4.9z" />
            </svg>
            <svg className="w-4 h-4 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
            </svg>
          </button>
          <div className={`z-10 ${hiddenLangMenu ? 'hidden' : ''} absolute font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44`}>
            <ul className="py-2 text-sm text-gray-700" aria-labelledby="dropdownLargeButton">
              <li>
                <Link locale="bg" className="block px-4 py-2 hover:bg-gray-100">Български</Link>
              </li>
              <li>
                <Link locale="en" className="block px-4 py-2 hover:bg-gray-100">English</Link>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </div>
</header>

}