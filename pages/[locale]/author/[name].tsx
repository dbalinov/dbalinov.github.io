import fs from 'fs';
import matter from 'gray-matter';
import Image from 'next/image';
import Markdown from '@/components/Markdown';
import { format, parseISO } from 'date-fns'
// import { en, bg } from 'date-fns/locale'
// import getPostMetadata from '@/components/getPostMetadata'

// const getPostContent = (slug: string) => {
//   const folder = "posts/"
//   const file = `${folder}${slug}.md`;
//   const content = fs.readFileSync(file, 'utf8');
//   const matterResult = matter(content);

//   return matterResult;
// }

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

  const posts = fs.readdirSync('posts');
  for (const fileName of posts) {
    for (const locale of ['bg', 'en']) {
      paths.push({
        params: {
          locale,
          name: fileName.replace('.md', '')
        }
      })
    }
  }

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params: { locale, name } }: any) {
  const fileName = fs.readFileSync(`posts/${name}.md`, 'utf-8');
  const { data: frontmatter, content } = matter(fileName);
  return {
    props: {
      locale,
      frontmatter,
      content
    },
  };
}

export default function PostPage({ frontmatter, content,locale }: any) {
  console.log(locale)

  return (
    <div className="mt-16">
      <div className="flex flex-col justify-center items-center">
        <div className="text-center w-full md:w-7/12 m-auto">
          <p className="text-sm md:text-base font-light text-gray-500 w-10/12 m-auto mt-10 mb-5">
            { format(parseISO(frontmatter.date), 'dd MMMM yyyy') }
          </p>
          <h1 className="font-bold text-3xl font-cal md:text-6xl mb-10 text-gray-800">
            {frontmatter.title}
          </h1>
          <p className="text-md md:text-lg text-gray-600 w-10/12 m-auto">
            {frontmatter.description}
          </p>
        </div>
        <a href="https://twitter.com/steventey" rel="noreferrer" target="_blank">
          <div className="my-8">
            <div className="relative w-8 h-8 md:w-12 md:h-12 rounded-full overflow-hidden inline-block align-middle">
              {/* <img alt="Steven Tey" srcset="/_next/image?url=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F28986134%3Fv%3D4&amp;w=96&amp;q=75 1x, /_next/image?url=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F28986134%3Fv%3D4&amp;w=256&amp;q=75 2x" src="/_next/image?url=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F28986134%3Fv%3D4&amp;w=256&amp;q=75" width="80" height="80" decoding="async" data-nimg="1" className="duration-700 ease-in-out grayscale-0 blur-0 scale-100" loading="lazy" style="color: transparent;"> */}
            </div>
            <div className="inline-block text-md md:text-lg align-middle ml-3">
              by <span className="font-semibold">{frontmatter.author}</span>
            </div>
          </div>
        </a>
      </div>
      <div className="relative h-104 md:h-158 w-full max-w-screen-lg lg:w-2/3 md:w-5/6 m-auto mb-10 md:mb-20 md:rounded-2xl overflow-hidden">
        <Image
          width={1200}
          height={630}
          alt={frontmatter.title}
          src={frontmatter.featured_image}
          className="w-full h-full object-cover duration-700 ease-in-out grayscale-0 blur-0 scale-100"
        />
      </div>
      <article className="w-11/12 sm:w-3/4 m-auto prose prose-md sm:prose-lg">
        <Markdown className="prose lg:prose-xl">{content}</Markdown>
      </article>
    </div>
  );
}
