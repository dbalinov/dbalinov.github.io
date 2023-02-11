import { GetStaticProps } from "next"
import { getConfig } from "@/components/i18n-server"
import { useEffect } from "react"
import { useRouter } from "next/router"

export const getStaticProps: GetStaticProps = () => {
  const { locales } = getConfig()
  return {
    props: {
      locales
    }
  }
}

function Index({ locales }: any) {
  const router = useRouter();

  // language detection
  // not recommended for production, use servers-side redirection instead of this
  useEffect(() => {
    for (const locale of locales) {
      for (const lang of navigator.languages) {
        if (lang.startsWith(locale)) {

          router.replace("/" + locale);
          return;
        }
      }
    }
  }, []);

  return <></>;
}

export default Index;