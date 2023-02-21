import Link, { LinkProps } from "next/link";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import posts from '../posts.json';

type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

type StaticI18LinkProps = LinkProps;//PartialBy<LinkProps, "href">;

export default function StaticI18nLink(props: any) {
  const { i18n } = useTranslation();
  const router = useRouter();
  const locale = props.locale || i18n.language || "";

  let { name, slug, locale: currentLocale } = router.query

  if (currentLocale != locale && slug) {
    const post: any = posts.find((x: any) => x[currentLocale + ''] == slug);

    if (post) {
      slug = post[locale];
    } else {
      return <></>
    }
  }

  if (!locale) {
    const href = props.href || router.asPath;
    return <Link {...props} href={href}></Link>;
  } else {
    const href = props.href
      ? `/${locale}${props.href}`
      : router.pathname
        .replace("[locale]", locale)
        .replace("[name]", name + "")
        .replace("[slug]", slug + "");

    return <Link {...props} href={href} locale={undefined}></Link>;
  }
}