import { GetStaticPaths, GetStaticProps } from "next"
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
  const { t } = useTranslation("common");
  return (
    <h1>{t("title")}</h1>
  );
}