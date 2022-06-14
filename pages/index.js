import Head from 'next/head'
import Script from 'next/script'
import {PostCard, PostWidget,Categories} from '../components'
import {getPosts} from '../services'
import { FeaturedPosts } from '../sections';

export default function Home({posts}) {
  return (  
    <div className="container mx-auto px-10 mb-8 ">
      <Head>
        <title>Coder Hunts - Programmer to help you</title>
        <meta name="description" content="A blog website to help students code better day by day" />
        <meta name="keywords" content="blog, coding blog, codechef solution, leetcode solution, coder hunts, blogs, coding, nextjs, coding help, coder hunts courses, coding environment, coder hunts challenges"></meta> 
        <link rel="shortcut icon" href="./favicon.png" />      
        <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4947463072730532"
     crossorigin="anonymous"></Script>
    </Head>
    <FeaturedPosts />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className='lg:col-span-8 col-span-1'>
        {posts.map((post) => (
          <PostCard post={post.node} key={post.node.title} />
        ))}
        </div>
      <div className="lg:col-span-4 col-span-1"> 
                <PostWidget/>
      </div>
      
      </div>
      
    </div>
  )
}

export async function getStaticProps(){
  const posts = (await getPosts() || []);

  return{
    props: {posts}
  }
}
