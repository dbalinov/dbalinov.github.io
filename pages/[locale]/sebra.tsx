import { GetStaticPaths, GetStaticProps } from "next"
import Head from "next/head"
import { useTranslation } from "react-i18next"
import { getI18nPaths, getI18nProps } from "@/components/i18n-server";
// import { Tableau } from "@/components/Tableau";
// import TableauReport from 'tableau-react';


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

  return (
    <>
      <Head>
        {/* <script type="text/javascript" src="https://public.tableau.com/javascripts/api/tableau-2.min.js"></script> */}
      </Head>
      <div className="mt-8">
        <div className="flex flex-col justify-center items-center">
          <div className="text-center w-full md:w-7/12 m-auto">
            <h1 className="font-bold text-3xl font-cal md:text-6xl mb-10 text-gray-800">
              {/* {t('title')} */}
              СЕБРА - Плащания по институции
            </h1>
          </div>
        </div>
        <article className="w-11/12 sm:w-3/4 m-auto prose prose-md sm:prose-lg">
        {/* <body onload="initViz();"> */}
      {/* <div id="vizContainer" style="width:1400px; height:800px; margin:auto;"></div> */}
      {/* <Tableau/> */}
      {/* <TableauReport
    url="https://public.tableau.com/views/SEBRAdashboard/Story"
  /> */}

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

      {/* <script type="text/javascript">
          function initViz() {
              var containerDiv = document.getElementById("vizContainer"),
                  url = "https://public.tableau.com/views/SEBRAdashboard/Story",
                  options = {
                      hideTabs: true,
                      onFirstInteractive: function () {
                          console.log("Run this code when the viz has finished loading.");
                      }
                  };

              var viz = new tableau.Viz(containerDiv, url, options);
              // Create a viz object and embed it in the container div.
          }
      </script> */}
  {/* </body> */}
        </article>
      </div>
    </>
  );
}


