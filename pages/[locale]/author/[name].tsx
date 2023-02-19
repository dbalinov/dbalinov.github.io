import fs from 'fs';
import matter from 'gray-matter';
import Image from 'next/image';
import { getSettings } from '@/components/settings';
import { getI18nPaths, getI18nProps } from "@/components/i18n-server";
import { SocialIcon } from "react-social-icons"
import Link from '@/components/Link'

// export const generateStaticParams = async () => {
//   const posts = getPostMetadata();
//   return posts.map(post => ({ slug: post.slug }))
// }

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
  const files = fs.readdirSync(folder)

  const posts = files
    .map(fileName => {
      const slug = fileName.replace('.md', '');
      const readFile = fs.readFileSync(`posts/${locale}/${fileName}`, 'utf-8');
      const { data: frontmatter } = matter(readFile);

      return { slug, frontmatter };
    })
    .filter((x: any) => x.frontmatter.author == name ||
      Array.isArray(x.frontmatter.author) && x.frontmatter.author.indexOf(name) > -1)

  return {
    props: {
      ...getI18nProps(context),
      locale,
      name,
      posts
    },
  };
}

export default function PostPage({ locale, name, settings, posts }: any) {
  const { people } = settings
  const person = people[name]
  const personName = person && person[locale]?.name || '';
  const picture = person?.picture || '/people/no-avatar.png'

  return (
    <div className="mt-16">
      <div className="flex flex-col justify-center items-center">
        <div className="text-center w-full md:w-7/12 m-auto">
          <h1 className="font-bold text-3xl font-cal md:text-2xl text-gray-800">
            {personName}
          </h1>
          {/* <p className="text-md md:text-lg text-gray-600 w-10/12 m-auto">
            {frontmatter.description}
          </p> */}
        </div>
        <a href="https://twitter.com/steventey" rel="noreferrer" target="_blank">
          <div className="my-8">
            <div className="relative w-8 h-8 md:w-12 md:h-12 rounded-full overflow-hidden inline-block align-middle">
              {/* <img alt="Steven Tey" srcset="/_next/image?url=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F28986134%3Fv%3D4&amp;w=96&amp;q=75 1x, /_next/image?url=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F28986134%3Fv%3D4&amp;w=256&amp;q=75 2x" src="/_next/image?url=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F28986134%3Fv%3D4&amp;w=256&amp;q=75" width="80" height="80" decoding="async" data-nimg="1" className="duration-700 ease-in-out grayscale-0 blur-0 scale-100" loading="lazy" style="color: transparent;"> */}
            </div>
            <div className="inline-block text-md md:text-lg align-middle ml-3">
              {/* by <span className="font-semibold">{frontmatter.author}</span> */}
            </div>
          </div>
        </a>
      </div>
      <article className="w-11/12 sm:w-3/4 m-auto prose prose-md sm:prose-lg">
        <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
          {Object.keys(person.contacts).map(key => {
            if (key == 'email') {
              return (
                <a key={key} href={`mailto:${person.contacts[key]}`} className="text-gray-500 hover:text-gray-900">
                  <svg fill="#000000" width="18" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 75.294 75.294">
                    <g>
                      <path d="M66.097,12.089h-56.9C4.126,12.089,0,16.215,0,21.286v32.722c0,5.071,4.126,9.197,9.197,9.197h56.9
                        c5.071,0,9.197-4.126,9.197-9.197V21.287C75.295,16.215,71.169,12.089,66.097,12.089z M61.603,18.089L37.647,33.523L13.691,18.089
                        H61.603z M66.097,57.206h-56.9C7.434,57.206,6,55.771,6,54.009V21.457l29.796,19.16c0.04,0.025,0.083,0.042,0.124,0.065
                        c0.043,0.024,0.087,0.047,0.131,0.069c0.231,0.119,0.469,0.215,0.712,0.278c0.025,0.007,0.05,0.01,0.075,0.016
                        c0.267,0.063,0.537,0.102,0.807,0.102c0.001,0,0.002,0,0.002,0c0.002,0,0.003,0,0.004,0c0.27,0,0.54-0.038,0.807-0.102
                        c0.025-0.006,0.05-0.009,0.075-0.016c0.243-0.063,0.48-0.159,0.712-0.278c0.044-0.022,0.088-0.045,0.131-0.069
                        c0.041-0.023,0.084-0.04,0.124-0.065l29.796-19.16v32.551C69.295,55.771,67.86,57.206,66.097,57.206z"/>
                    </g>
                  </svg>
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
                  className="text-gray-500 hover:text-gray-900"
                />
              )
            }
          })}
        </div>
        <div className="relative w-40 h-40 md:rounded-2xl overflow-hidden">
          <Image
            width={120}
            height={120}
            alt={personName}
            src={picture}
            className="w-full h-full object-cover duration-700 ease-in-out grayscale-0 blur-0 scale-100"
          />
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
    </div>
  );
}
