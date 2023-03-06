import { FileService } from "@/services"
import matter from 'gray-matter'
import Image from 'next/image'
import Head from 'next/head'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { getSettings } from '@/components/settings';
import { getI18nPaths, getI18nProps } from "@/components/i18n-server";
import { SocialIcon } from "react-social-icons"
import Link from '@/components/Link'

// const PostPage = (props: any) => {
//   const slug = props.params.slug;
//   const post = getPostContent(slug);
// }

export async function getStaticPaths() {
  const paths = [];

  const settings = await getSettings()
  const { locales, people } = settings

  for (const name in people) {
    for (const locale of locales) {
      paths.push({
        params: {
          locale,
          name
        }
      })
    }
  }

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps(context: any) {
  const { params: { locale, name } } = context

  const folder = `posts/${locale}`
  const files = await FileService.readDir(folder)

  const posts = files
    .map(async fileName => {
      const slug = fileName.replace('.md', '');
      const readFile = await FileService.readFile(`posts/${locale}/${fileName}`);
      const { data: frontmatter } = matter(readFile);

      return { slug, frontmatter };
    })
    

  return {
    props: {
      ...getI18nProps(context),
      locale,
      name,
      posts: (await Promise.all(posts))
        .filter((x: any) => x.frontmatter.author == name ||
          Array.isArray(x.frontmatter.author) && x.frontmatter.author.indexOf(name) > -1)
    },
  };
}

export default function PostPage({ locale, name, settings, posts }: any) {
  const { people } = settings
  const person = people[name]
  const personName = person && person[locale]?.name || '';
  const picture = person?.picture || '/people/no-avatar.png'

  return (
    <>
      <Head>
        <title>{personName}</title>

        {/* <link rel="icon" href={image} />

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
      <div className="flex flex-col justify-center items-center">
        {/* <div className="text-center w-full md:w-7/12 m-auto"> */}
          {/* <h1 className="font-bold text-3xl font-cal md:text-2xl text-black">
            {personName}
          </h1> */}
          {/* <p className="text-md md:text-lg text-gray-800 w-10/12 m-auto">
            {frontmatter.description}
          </p> */}
        {/* </div> */}
        {/* <a href="https://twitter.com/steventey" rel="noreferrer" target="_blank"> */}
          <div>
            <div className="relative w-28 h-28 rounded-full overflow-hidden inline-block align-middle">
              {/* <img alt="Steven Tey" srcset="/_next/image?url=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F28986134%3Fv%3D4&amp;w=96&amp;q=75 1x, /_next/image?url=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F28986134%3Fv%3D4&amp;w=256&amp;q=75 2x" src="/_next/image?url=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F28986134%3Fv%3D4&amp;w=256&amp;q=75" width="80" height="80" decoding="async" data-nimg="1" className="duration-700 ease-in-out grayscale-0 blur-0 scale-100" loading="lazy" style="color: transparent;"> */}
              <Image
                width={100}
                height={100}
                alt={personName}
                src={picture}
                className="w-28 h-28 rounded-full"
              />
            </div>
            <div className="inline-block text-md md:text-lg align-middle ml-3">
              <span className="font-semibold">{personName}</span>
            </div>
          </div>
        {/* </a> */}
      </div>
      <article className="w-11/12 sm:w-3/4 m-auto">
        <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
          {Object.keys(person.contacts).map(key => {
            if (key == 'email') {
              return (
                <a key={key} href={`mailto:${person.contacts[key]}`} className="text-gray-600 hover:text-gray-900">
                  <FontAwesomeIcon icon={faEnvelope} width="22" />
                </a>
              )
            } else {
              return (
                <SocialIcon
                  key={key}
                  url={person.contacts[key]}
                  target="_blank"
                  fgColor="currentColor"
                  bgColor="transparent"
                  style={{ width: '32px', height: '32px' }}
                  className="text-gray-600 hover:text-gray-900"
                />
              )
            }
          })}
        </div>
        <div className="px-6 pb-2">
          {person[locale].facts.map((fact: string, index: number) => (
            <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{fact}</span>
          ))}
        </div>
      </article>
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 p-4 md:p-0'>
        {posts.map(({ slug, frontmatter }: any) => (
          <div
            key={slug}
            className='border border-gray-200 m-2 rounded-xl shadow-lg overflow-hidden flex flex-col'
          >
            <Link href={`/posts/${slug}`}>
              <h1 className='p-4'>{frontmatter.title}</h1>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
