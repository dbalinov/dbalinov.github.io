import fs from "fs";
import path from "path";

const localeDir = "locales/";

export interface I18nProps {
  _i18n: {
    locale: string;
    resource: any;
    locales: string[];
  };
}

function getConfig() {
  return {
    locales: ["bg", "en"],
  };
}

export function getI18nPaths() {
  const { locales } = getConfig();

  return locales.map(locale => ({
    params: { locale }
  }));
}

export function getI18nProps(ctx: any): I18nProps {
  const { locales } = getConfig();
  const locale = ctx.params?.locale;
  if (!locale || !locales.includes(locale)) {
    throw new Error(`Invalid locale ${locale}`);
  }

  const resource: Record<string, any> = {};

  const nsDir = path.join(localeDir, locale);

  if (fs.existsSync(nsDir)) {
    const files = fs.readdirSync(nsDir)
    files
      .filter(file => file.endsWith(".json"))
      .forEach(file => {
      const data = fs.readFileSync(`${nsDir}/${file}`, 'utf8')
      const ns = path.basename(file, path.extname(file));
      resource[ns] = JSON.parse(data);
    });
  }

  return {
    _i18n: {
      locale,
      locales,
      resource,
    },
  };
}