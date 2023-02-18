import { GetStaticProps } from "next"
import { useEffect } from "react"
import { useRouter } from "next/router"
import { getSettings } from "@/components/settings"

export const  getStaticProps: GetStaticProps = async () => {
  const { locales } = await getSettings()

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