import { GetStaticPaths, GetStaticProps } from "next"
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

export default function Sebra({ settings }: any) {
  const { t } = useTranslation("sebra");

  return (
    <div className="mt-8">
      <div className="flex flex-col justify-center items-center">
        <div className="text-center w-full md:w-7/12 m-auto">
          <h1 className="font-bold text-3xl font-cal md:text-6xl mb-10 text-gray-800">
            {/* {t('title')} */}
            Посещаемост в детските ясли и градини в София през учебната 2021/2022 година
          </h1>
        </div>
      </div>
      <article className="w-11/12 sm:w-3/4 m-auto prose prose-md sm:prose-lg">
{/* 
      <body onload="ChangeClass(); initViz();">

<div id="vizContainer" style="width:1400px; height:800px; margin:auto;"></div>

<div class="container mt-5">
  <div class="row">
    <div class="col-12">
        
        <p>
            Повече информация за визуализацията може да прочетете в нашия <a href="https://data-for-good.bg/blog/sofia-kindergartens-2021-2022">блог</a>.
        </p>
        <p>
            Всички налични данни обобщени и използвани в приложението са достъпни в машинночетим формат като
            <a href="https://docs.google.com/spreadsheets/d/1dKUV7q9GlrIgsWbw6DNhkjjFFjY-aNnDOtEcM7ZC4Gk/export?format=xlsx">XLSX</a>
        </p>
        <p>
            Суровите данни предоставени от Столична община в отговор на запитвания по ЗДОИ са достъпни <a href="https://drive.google.com/drive/folders/1jQDSzg3rYrBJ6kXaqHGMOQdr76l0yRC7?usp=sharing">тук</a>.
        </p>
    </div>
  </div>
</div>


<script type="text/javascript" src="https://public.tableau.com/javascripts/api/tableau-2.min.js"></script>
<script type="text/javascript">
    function ChangeClass() {
        document.getElementById("main").className = "container-fluid";
    }
</script>
<script type="text/javascript">
    function initViz() {
        var containerDiv = document.getElementById("vizContainer"),
            url = "https://public.tableau.com/views/SofiaKindergartens20212022/SofiaKindergartens",
            options = {
                hideTabs: true,
                onFirstInteractive: function () {
                    console.log("Run this code when the viz has finished loading.");
                }
            };

        var viz = new tableau.Viz(containerDiv, url, options);
        // Create a viz object and embed it in the container div.
    }
</script>
</body> */}

      </article>
    </div>
  );
}