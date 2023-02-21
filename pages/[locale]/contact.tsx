import { GetStaticPaths, GetStaticProps } from "next"
import Head from "next/head"
import { useTranslation } from "react-i18next"
import { getI18nPaths, getI18nProps } from "@/components/i18n-server";

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

export default function Contact({ settings }: any) {
  const { t } = useTranslation("contact");

  const title = t('title')
  return (
    <>
      <Head>
        <title>{title}</title>
        {/* <link rel="icon" href={image} />*/}

        <meta itemProp="name" content={title} />
        {/* <meta itemProp="description" content={description} /> */}
        {/* <meta itemProp="image" content={image} /> */}
        {/* <meta name="description" content={description} /> */}
        <meta property="og:title" content={title} />
        {/* <meta property="og:description" content={description} /> */}
        {/* <meta property="og:image" content={image} /> */}
        {/* <meta property="og:type" content="article" /> */}

        <meta name="twitter:card" content="summary_large_image" />
        {/* <meta name="twitter:creator" content="@dataforgoodbg" /> */}
        <meta name="twitter:title" content={title} />
        {/* <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} /> */}
      </Head>
      <div className="mt-8">
        <div className="flex flex-col justify-center items-center">
          <div className="text-center w-full md:w-7/12 m-auto">
            <h1 className="font-bold text-3xl font-cal md:text-6xl mb-10 text-gray-800">
              {title}
            </h1>
          </div>
        </div>
        <article className="w-11/12 sm:w-3/4 m-auto prose prose-md sm:prose-lg">
          <h2>{t('forVolunteers')}</h2>
          <p className="lead">
            { t('volunteerText') }
          </p>
          <div className="text-center my-8">
            <a href="https://forms.gle/Ep6UApUAF3gVuxMBA" target="_blank" rel="noreferrer nofollow"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded no-underline">
              { t('volunteerButton') }
            </a>
          </div>
          <h2>{t('questions')}</h2>
          <p className="lead">
            { t('writeUs') } 
            <a href={`mailto:${settings.email}`} className="break-normal">{settings.email}</a>
          </p>
        </article>
      </div>
    </>
  );
}