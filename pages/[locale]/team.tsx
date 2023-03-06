import { GetStaticPaths, GetStaticProps } from "next"
import Head from "next/head"
import { useTranslation } from "react-i18next"
import { getI18nPaths, getI18nProps } from "@/components/i18n-server"
import Image from 'next/image'
import Link from 'next/link'

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

  const title = t("title")
  const image = `${process.env.NEXT_PUBLIC_HOST_URL}/people/team-bg.jpg`

  return (
    <>
      <Head>
        <title>{title}</title>

        <link rel="icon" href={image} />

        <meta itemProp="name" content={title} />
        {/* <meta itemProp="description" content={description} /> */}
        <meta itemProp="image" content={image} />
        {/* <meta name="description" content={description} /> */}
        <meta property="og:title" content={title} />
        {/* <meta property="og:description" content={description} /> */}
        <meta property="og:image" content={image} />
        <meta property="og:type" content="article" />

        <meta name="twitter:card" content="summary_large_image" />
        {/* <meta name="twitter:creator" content="@dataforgoodbg" /> */}
        <meta name="twitter:title" content={title} />
        {/* <meta name="twitter:description" content={description} /> */}
        <meta name="twitter:image" content={image} />
      </Head>
      <div className="flex flex-col justify-center items-center">
        <div className="text-center w-full md:w-7/12 m-auto">
          <h1 className="font-bold text-3xl font-cal md:text-6xl mb-10 text-black">
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
      <article className="w-11/12 sm:w-3/4 m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-n1 gap-x-4">
          {Object.keys(people).filter(key => people[key]?.isMember).map(key => {
            const person = people[key];
            const personName = person[locale].name;

            return (
              <Link href={`/${locale}/author/${key}`} key={key} className="border-y-2 border-black">
                <div className="flex justify-start py-3">
                  <Image className="w-16 h-16 rounded-full" src={person.picture} width={200} height={200} alt={personName} />
                  <span className="self-center font-bold text-xl pl-3">
                    {personName}
                  </span>
                </div>
              </Link>
            )
          })}
        </div>
      </article>
    </>
  );
}