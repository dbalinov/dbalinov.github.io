import fs from 'fs';
import matter from 'gray-matter';
// import Image from 'next/image';
import Link from 'next/link';
// import getPostMetadata from '@/components/getPostMetadata'
// import PostPreview from '@/components/PostPreview'

// // export async function getStaticProps(context: any) {
// //   return {
// //     props: {}, // will be passed to the page component as props
// //     // fallback: false
// //   }
// // }

// export default async function Home() {
//   const postMetadata = getPostMetadata()

//   const postPreviews = postMetadata.map((post) => (
//     <PostPreview key="post.slug" {...post} />
//   ))

//   return (
//     <>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         {postPreviews}
//       </div>
//     </>
//   )
// }

export async function getStaticProps() {

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
      posts,
    },
  };
}

export default function Home({ posts }: any) {
  return (
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
  );
}
