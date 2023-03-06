import { useTranslation } from "react-i18next"
import { SocialIcon } from "react-social-icons"
import Link from "@/components/Link"

export default function Footer({ settings }: any) {
  const { t: tCommon } = useTranslation("common")
  const { t: tMenu } = useTranslation("menu")
  const { social } = settings
  const year = new Date().getFullYear()

  return <footer className="p-4 sm:p-6 mt-8">
    <div className='container mx-auto'>
      <div className="sm:flex sm:items-center sm:justify-between">
        <Link href="/" className="flex items-center mb-4 sm:mb-0">
          <span className="self-center text-lg font-semibold whitespace-nowrap">{tCommon('title')}</span>
        </Link>
        <ul className="flex flex-wrap items-center mb-6 text-sm sm:mb-0">
          <li>
            <Link href="/team" className="mr-4 hover:underline md:mr-6 ">{tMenu("team")}</Link>
          </li>
          <li>
            <Link href="/contact" className="hover:underline">{tMenu("contact")}</Link>
          </li>
      </ul>
    </div>
    <hr className="my-6 border-gray-800 sm:mx-auto lg:my-8" />
    <div className="sm:flex sm:items-center sm:justify-between">
      <span className="text-sm sm:text-center">
        © {year} <Link href="/" className="hover:underline">{tCommon('title')}</Link>. {tCommon('copyright')}
      </span>
        <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
          {Object.keys(social).map(key => (
            <SocialIcon
              key={key}
              url={social[key]}
              target="_blank"
              fgColor="currentColor"
              bgColor="transparent"
              style={{ width: '32px', height: '32px' }}
              className="text-gray-600 hover:text-gray-900"
            />
          ))}
        </div>
      </div>
    </div>
  </footer>
}