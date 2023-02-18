import Layout from '../components/app/Layout';
import '../styles/globals.css';
import { appWithTranslation } from 'next-i18next';
import { withStaticI18n } from "@/components/i18n-browser";
import { SettingsContext } from '../context/SettingsContext';

function MyApp({ Component, pageProps }: any) {
  return (
    <SettingsContext.Consumer>
      {settings => (
        <Layout settings={settings}>
          <Component {...pageProps} settings={settings} />
        </Layout>
      )}
    </SettingsContext.Consumer>
  );
}

export default appWithTranslation(withStaticI18n(MyApp))
