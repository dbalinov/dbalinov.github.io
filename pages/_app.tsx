import Layout from '../components/app/Layout';
import '../styles/globals.css';
import { appWithTranslation } from 'next-i18next';
import { withStaticI18n } from "@/components/i18n-browser";

function MyApp({ Component, pageProps }: any) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default appWithTranslation(withStaticI18n(MyApp))
