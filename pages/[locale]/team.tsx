import { GetStaticPaths, GetStaticProps } from "next"
import { useTranslation } from "react-i18next"
import { getI18nPaths, getI18nProps } from "@/components/i18n-server";
import { SocialIcon } from "react-social-icons"
// import fs from 'fs';
// import matter from 'gray-matter';
import Image from 'next/image'
// import { format, parseISO } from 'date-fns'
// import { enGB, bg } from 'date-fns/locale'
// import { getI18nPaths, getI18nProps } from "@/components/i18n-server";

export const getStaticPaths: GetStaticPaths = () => {
  return {
    fallback: false,
    paths: getI18nPaths(),
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      ...getI18nProps(context),
    }
  };
};

export default function TeamPage({ _i18n, settings }: any) {
  const { people } = settings
  const { locale } = _i18n
  const { t } = useTranslation("team")

  return (
    <div className="mt-16">
      <div className="flex flex-col justify-center items-center">
        <div className="text-center w-full md:w-7/12 m-auto">
          <h1 className="font-bold text-3xl font-cal md:text-6xl mb-10 text-gray-800">
            {t("title")}
          </h1>
        </div>
      </div>
      <div className="relative h-104 md:h-158 w-full max-w-screen-lg lg:w-2/3 md:w-5/6 m-auto mb-10 md:mb-20 md:rounded-2xl overflow-hidden">
        <Image
          width={1200}
          height={630}
          alt={t("title")}
          src="/people/team-bg.jpg"
          className="w-full h-full object-cover duration-700 ease-in-out grayscale-0 blur-0 scale-100"
        />
      </div>
      <article className="w-11/12 sm:w-3/4 m-auto prose prose-md sm:prose-lg">
        <div className="grid grid-cols-2 gap-4">
          {Object.keys(people).map(key => {
            const person = people[key];

            return (<div className="max-w-sm rounded overflow-hidden shadow-lg" key={key}>
              <Image className="w-full" src={person.picture} width={200} height={200} alt="Sunset in the mountains" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{person[locale].name}</div>
              </div>

              <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                {Object.keys(person.contacts).map(key => {
                  if (key == 'email') {
                    return (
                      <a key={key} href={`mailto:${person.contacts[key]}`} className="text-gray-500 hover:text-gray-900">
                        <svg fill="#000000" width="18" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 75.294 75.294">
                          <g>
                            <path d="M66.097,12.089h-56.9C4.126,12.089,0,16.215,0,21.286v32.722c0,5.071,4.126,9.197,9.197,9.197h56.9
                              c5.071,0,9.197-4.126,9.197-9.197V21.287C75.295,16.215,71.169,12.089,66.097,12.089z M61.603,18.089L37.647,33.523L13.691,18.089
                              H61.603z M66.097,57.206h-56.9C7.434,57.206,6,55.771,6,54.009V21.457l29.796,19.16c0.04,0.025,0.083,0.042,0.124,0.065
                              c0.043,0.024,0.087,0.047,0.131,0.069c0.231,0.119,0.469,0.215,0.712,0.278c0.025,0.007,0.05,0.01,0.075,0.016
                              c0.267,0.063,0.537,0.102,0.807,0.102c0.001,0,0.002,0,0.002,0c0.002,0,0.003,0,0.004,0c0.27,0,0.54-0.038,0.807-0.102
                              c0.025-0.006,0.05-0.009,0.075-0.016c0.243-0.063,0.48-0.159,0.712-0.278c0.044-0.022,0.088-0.045,0.131-0.069
                              c0.041-0.023,0.084-0.04,0.124-0.065l29.796-19.16v32.551C69.295,55.771,67.86,57.206,66.097,57.206z"/>
                          </g>
                        </svg>
                      </a>
                    )
                  } else {
                    return (
                      <SocialIcon
                        key={key}
                        url={person.contacts[key]}
                        target="_blank"
                        fgColor="currentColor"
                        bgColor="transparent"
                        style={{ width: '32px', height: '32px' }}
                        className="text-gray-500 hover:text-gray-900"
                      />
                    )
                  }
                })}
              </div>

              <div className="px-6 pb-2">
                {person[locale].facts.map((fact: string) => (
                  <span key={key} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{fact}</span>
                ))}
              </div>
            </div>)
          })}
        </div>
      </article>


      <a href="mailto:nikola.tulechki@data-for-good.bg" className="btn btn-dribbble btn-sm rounded-circle"><i className="fa fa-envelope"></i></a>
    </div>
  );
}