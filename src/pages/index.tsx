import Container from '../components/container';
import MockkongPlan from '../components/mockkong/plan';
import Layout from '../components/layout';
import Head from 'next/head';
import Counter from '../features/counter/Counter'

export default function Index({ allPosts }) {
  const heroPost = allPosts[0]
  return (
    <>
      <Layout children={null}>
        <Head children={null}>
          <title>Next.js Blog Example</title>
        </Head>
        <Container children={null}>
          {heroPost && (
            <MockkongPlan
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
        </Container>

        <Counter />
      </Layout>
    </>
  )
}

export async function getStaticProps({  }) {
  const allPosts = []
  return {
    props: { allPosts },
  }
}