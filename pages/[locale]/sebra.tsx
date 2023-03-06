import { GetStaticPaths, GetStaticProps } from "next"
import Head from "next/head"
import { useTranslation } from "react-i18next"
import { getI18nPaths, getI18nProps } from "@/components/i18n-server";
import { Tableau } from "@/components/Tableau";

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

export default function Sebra({ settings }: any) {
  const { t } = useTranslation("sebra");

  const title = 'СЕБРА - Плащания по институции'
  return (<>
      <Head>
        <title>{title}</title>

        {/* <link rel="icon" href={image} /> */}

        <meta itemProp="name" content={title} />
        {/* <meta itemProp="description" content={description} /> */}
        {/* <meta itemProp="image" content={image} /> */}
        {/* <meta name="description" content={description} /> */}
        <meta property="og:title" content={title} />
        {/* <meta property="og:description" content={description} /> */}
        {/* <meta property="og:image" content={image} /> */}
        <meta property="og:type" content="article" />

        <meta name="twitter:card" content="summary_large_image" />
        {/* <meta name="twitter:creator" content="@dataforgoodbg" /> */}
        <meta name="twitter:title" content={title} />
        {/* <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} /> */}
      </Head>
      <div>
        <div className="flex flex-col justify-center items-center">
          <div className="text-center w-full md:w-7/12 m-auto">
            <h1 className="font-bold text-3xl font-cal md:text-6xl mb-10 text-black">
              {title}
            </h1>
          </div>
        </div>
        <article className="w-11/12 sm:w-3/4 m-auto prose prose-md sm:prose-lg">
          <div className="container mt-5">
            <div className="row">
              <div className="col-12">
                <p>
                  Всички налични данни от СЕБРА използвани в приложението са достъпни в машинночетим формат като 
                  <a href="https://docs.google.com/spreadsheets/d/1VoB4dIH2Y2x2O-eH0ivNmBUYCcT-1NR6T5h8eWkE33Y/export?format=xlsx" target="_blank" rel="noreferrer">XLSX</a> 
                  и <a href="https://docs.google.com/spreadsheets/d/1VoB4dIH2Y2x2O-eH0ivNmBUYCcT-1NR6T5h8eWkE33Y/gviz/tq?tqx=out:csv&gid=1639699984" target="_blank" rel="noreferrer">CSV</a>.
                </p>
                <p>
                  Кодът на програмите за чистене и форматиране на входните данни са достъпни в <a href="https://github.com/data-for-good-bg/sebra-scrape">github</a>.
                </p>
                <p>
                  Повече информация за визуализацията може да прочетете в нашия <a href="https://data-for-good.bg/blog/sebra-visualization-bg">блог</a>.
                </p>
              </div>
            </div>
          </div>
          <Tableau url="https://public.tableau.com/views/SEBRAdashboard/Story" />
        </article>
      </div>
    </>
  );
}


