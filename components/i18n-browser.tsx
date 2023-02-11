import { AppProps } from "next/app";
import { I18nextProvider } from "react-i18next";
import i18n from "i18next";
import { I18nProps } from "./i18n-server";

export function withStaticI18n(App: (props: AppProps) => any) {
  function AppWithStaticI18n(props: AppProps) {
    const {_i18n } = props.pageProps as I18nProps;

    if (_i18n) {
      const { locale, resource } = _i18n;

      const instance = i18n.createInstance({
        lng: locale,
        resources: {
          [locale]: resource,
        },
        react: {
          // ssr doesn't support'
          useSuspense: false,
        },
        // load resource synchronously
        initImmediate: false,
      });

      instance.init();

      return (
        <I18nextProvider i18n={instance}>
          <App {...props}></App>
        </I18nextProvider>
      );
    } else {
      return <App {...props}></App>;
    }
  }

  return AppWithStaticI18n;
}
