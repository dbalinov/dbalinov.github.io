import { GetStaticPaths, GetStaticProps } from "next"
import { useTranslation } from "react-i18next"
import { getI18nPaths, getI18nProps } from "@/components/i18n-server";
import { useRouter } from "next/router";
import fs from 'fs'
import matter from 'gray-matter'
// import Image from 'next/image'
import Link from '@/components/Link'

export const getStaticPaths: GetStaticPaths = () => {
  return {
    fallback: false,
    paths: getI18nPaths(),
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  
  const folder = "posts/"
  const files = fs.readdirSync(folder)

  // const postMetadata = getPostMetadata();

  const posts = files.map((fileName) => {
    const slug = fileName.replace('.md', '');
    const readFile = fs.readFileSync(`posts/${fileName}`, 'utf-8');
    const { data: frontmatter } = matter(readFile);
    return {
      slug,
      frontmatter,
    };
  });

  // const markdownPosts = files.filter(file => file.endsWith(".md"))

  // const posts = markdownPosts.map((fileName) => {
  //   const fileContents = fs.readFileSync(`posts/${fileName}`, 'utf8')
  //   const matterResult = matter(fileContents);

  //   return {
  //     title: matterResult.data.title,
  //     date: matterResult.data.date,
  //     subtitle: matterResult.data.subtitle,
  //     slug: fileName.replace(".md", "")
  //   }
  // });
  return {
    props: {
      ...getI18nProps(ctx),
      posts,
    }
  };
};

export default function Blog({ posts }: any) {
  const { t } = useTranslation("common");
  const router = useRouter();
  const { locale, locales, push } = useRouter()
  const handleClick = (loc: string) => () => {
    push('/', undefined, {locale: loc})
  }

  return (
    <>
    <div>
      <h3>With useRouter</h3>
      <h1>Choose your locale:</h1>

      {locales?.map(l => (
        <button key={l} onClick={handleClick(l)}>
          {l}
        </button>
      ))}
    </div>
    <h1>{locale}</h1>
    <div>
      <h3>With link</h3>
      <h1>Choose your locale:</h1>

      {locales?.map(l => (
        <h4 key={l}>
          <Link href={'/'} locale={l}>
            {l}
          </Link>
        </h4>
      ))}
    </div>
    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 p-4 md:p-0  mt-20'>
      {posts.map(({ slug, frontmatter }: any) => (
        <div
          key={slug}
          className='border border-gray-200 m-2 rounded-xl shadow-lg overflow-hidden flex flex-col'
        >
          <Link href={`/posts/${slug}`}>
            {/* <Image
              width={650}
              height={340}
              alt={frontmatter.title}
              src={`/${frontmatter.socialImage}`}
            /> */}
            <h1 className='p-4'>{frontmatter.title}</h1>
          </Link>
        </div>
      ))}
    </div>
    </>
  );
}
