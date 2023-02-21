import { GetStaticPaths, GetStaticProps } from "next"
import Head from "next/head"
import { useTranslation } from "react-i18next"
import { getI18nPaths, getI18nProps } from "@/components/i18n-server"

export const getStaticPaths: GetStaticPaths = () => {
  return {
    fallback: false,
    paths: getI18nPaths(),
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  return {
    props: getI18nProps(ctx),
  };
}

export default function Home(props: any) {
  const { t } = useTranslation("home");
  return (
    <>
      <Head>
        <title>{t('title')}</title>
        {/*

        <link rel="icon" href={image} />

        <meta itemProp="name" content={title} />
        <meta itemProp="description" content={description} />
        <meta itemProp="image" content={image} />
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:type" content="article" /> */}

        <meta name="twitter:card" content="summary_large_image" />
        {/* <meta name="twitter:creator" content="@dataforgoodbg" /> */}
        {/* <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} /> */}
      </Head>
      <div className="mt-8">
        <div className="flex flex-col justify-center items-center">
          <div className="text-center w-full md:w-7/12 m-auto">
            <h1 className="font-bold text-3xl font-cal md:text-6xl mb-10 text-gray-800">
              {t('title')}
            </h1>
            <p>{t("description")}</p>
            {/* <a href="/blog" className="btn btn-primary">
              Read our blog
            </a>*/}
          </div>
        </div>
        <article className="w-11/12 sm:w-3/4 m-auto prose prose-md sm:prose-lg">
          <div className="section features-6">
            <div className="container">
              <div className="row">
                <div className="col-md-8 mx-auto">
                  <div className="icon icon-lg icon-shape icon-shape-primary shadow rounded-circle">
                    <i className="fa fa-group"></i>
                  </div>
                  <h2>{t("whatWeDo.title")}</h2>
                  <p>{t("whatWeDo.description")}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-8 mx-auto">
                  <div className="icon icon-lg icon-shape icon-shape-warning shadow rounded-circle">
                    <i className="fa fa-heart"></i>
                  </div>
                  <h2>{t("forVolunteers.title")}</h2>
                  <p>{t("forVolunteers.description")}</p>
                  <p>{t("forVolunteers.description2")}</p>
                  <a href="https://forms.gle/Ep6UApUAF3gVuxMBA" target="_blank" rel="noreferrer nofollow"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded no-underline">
                    { t('forVolunteers.volunteerButton') }
                  </a>
                </div>
              </div>
              <div className="row">
                <div className="col-md-8 mx-auto">
                  <div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle">
                    <i className="fa fa-diamond"></i>
                  </div>
                  <h2>{t("forBeneficiaries.title")}</h2>
                  <p>{t("forBeneficiaries.description")}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="section features-6">
            <h2>{t("ourProcess.title")}</h2>
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="info info-horizontal info-hover-primary">
                    <div className="icon icon-shape icon-shape-info rounded-circle text-white">
                      <i className="ni ni-bulb-61 text-info"></i>
                    </div>
                    <div className="description pl-4">
                      <h5 className="title">{t("ourProcess.step1.title")}</h5>
                      <p>{t("ourProcess.step1.description")}</p>
                      {/* <!-- <a className="text-info">Learn more</a> --> */}
                    </div>
                  </div>
                  <div className="info info-horizontal info-hover-primary">
                    <div className="icon icon-shape icon-shape-info rounded-circle text-white">
                      <i className="ni ni-app text-info"></i>
                    </div>
                    <div className="description pl-4">
                      <h5 className="title">{t("ourProcess.step2.title")}</h5>
                      <p>{t("ourProcess.step2.description")}</p>
                      {/* <!-- <a className="text-info">Learn more</a> --> */}
                    </div>
                  </div>
                  <div className="info info-horizontal info-hover-primary">
                    <div className="icon icon-shape icon-shape-info rounded-circle text-white">
                      <i className="ni ni-delivery-fast text-info"></i>
                    </div>
                    <div className="description pl-4">
                      <h5 className="title">{t("ourProcess.step3.title")} </h5>
                      <p>{t("ourProcess.step3.description")}</p>
                      {/* <!-- <a className="text-info">Learn more</a> --> */}
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-10 mx-md-auto">
                  {/* <img className="ml-lg-5" src="{{ '/assets/img/ill/ill.png' | relative_url }}" width="100%"> */}
                </div>
              </div>
            </div>
          </div>
          <div className="section features-1">
            <div className="container">
              <div className="row">
                <div className="col-md-8 mx-auto">
                  <span className="badge badge-primary badge-pill mb-3">{t("areasOfActivity.contribution")}</span>
                  <h3 className="display-3">{t("areasOfActivity.title")}</h3>
                  <p className="lead">{t("areasOfActivity.description")}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <div className="info">
                    <div className="icon icon-lg icon-shape icon-shape-primary shadow rounded-circle">
                      <i className="fa fa-book"></i>
                    </div>
                    <h6 className="info-title text-uppercase text-primary">{t("areasOfActivity.education.title")}</h6>
                    <p className="description opacity-8">{t("areasOfActivity.education.description")}</p>
                    {/* <a className="text-primary">Нашият принос към образованието
                      <i className="ni ni-bold-right text-primary"></i>
                    </a> */}
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="info">
                    <div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle">
                      <i className="fa fa-tree"></i>
                    </div>
                    <h6 className="info-title text-uppercase text-success">{t("areasOfActivity.environment.title")}</h6>
                    <p className="description opacity-8">{t("areasOfActivity.environment.description")}</p>
                    {/* <!-- <a className="text-primary">Нашият принос към околната среда
                      <i className="ni ni-bold-right text-primary"></i>
                    </a> --> */}
                  </div>
              </div>
              <div className="col-md-4">
                <div className="info">
                  <div className="icon icon-lg icon-shape icon-shape-warning shadow rounded-circle">
                    <i className="fa fa-group"></i>
                  </div>
                  <h6 className="info-title text-uppercase text-warning">{t("areasOfActivity.democracy.title")}</h6>
                  <p className="description opacity-8">{t("areasOfActivity.democracy.description")}</p>
                  {/* <!-- <a className="text-primary">Нашият принос към демокрацията
                    <i className="ni ni-bold-right text-primary"></i>
                  </a> --> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  </>
  );
}