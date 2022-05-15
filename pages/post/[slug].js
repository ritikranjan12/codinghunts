import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import {
  PostDetail,
  Author,
  CommentForm,
  PostWidget,
  Categories
} from '../../components'
import { getPosts, getPostDetails } from '../../services'

const PostDetails = ({ post }) => {
  const router = useRouter()
  
  if (router.isFallback) {
    router.push("/")
  }
  return (
    <div className="container mx-auto mb-8 px-10">
      <Head>
        <title>Coder Hunts - Posts</title>
        <meta name="description" content="A blog website to help students code better day by day" />
        <meta name="keywords" content="blog, coding, blog, codechef, solution, leetcode, solution, coder hunts, blogs, coding ,nextjs ,coding help, coder hunts courses, coding environment, coder hunts challenges"></meta>
        <link rel="shortcut icon" href="./favicon.png" />
    </Head>
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="col-span-2 lg:col-span-8">
          <PostDetail post={post} />
          <Author author={post.author} />
          <CommentForm />
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative top-8 lg:sticky">
            <PostWidget slug={post.slug} categories={post.categories.map(category => category.slug)} />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostDetails

export async function getStaticProps({ params }) {
  const data = await getPostDetails(params.slug)
  return {
    props: { post: data },
  }
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
    const posts = await getPosts();

    return {
      paths: posts.map(({ node: { slug } }) => ({ params: { slug }  })),
      fallback: true,
    };
  }