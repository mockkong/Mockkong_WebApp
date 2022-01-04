import { useRouter } from 'next/router'
import Container from 'components/container'
import Layout from 'components/layout'
import Head from 'next/head'

export default function Post({ post }) {
  const router = useRouter()
  
  console.log(router.isFallback); 

  return (
    <Layout>
      <Container>
        {router.isFallback ? (
          <div>Loading…</div>
        ) : (
          <>
            <article>
              <Head>
                <title>
                  Mockkong | {post.title}
                </title>
              </Head>
              <div>제목: {post.title}</div>
              <div>내용: {post.contents}</div>
            </article>
          </>
        )}
      </Container>
    </Layout>
  )
}

export async function getStaticProps() {
  const post = {title: "제목12", contents: "내용12"};

  return {
    props: {
      post,
    },
    revalidate: 10, // In seconds
  }
}

export async function getStaticPaths() {
  const allSlugs = ['1', '2', '3']

  return {
    paths: allSlugs.map((slug) => `/posts/${slug}`) || [],
    fallback: 'blocking',
  }
}