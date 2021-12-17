import Head from 'next/head';
import Layout from '../components/Layout';
import Container from '../components/Container';
import * as Mockkong from '../components/mockkong';
import sampleGoals from '../contexts/sampleData/sampleGoals.json';

export default function Dashboard({ ...props }) {
  const { AIRecommendGoals, goals } = props.data;

  return (
    <Layout>
      <Head>
        <title>Next.js Blog Example</title>
      </Head>
      <Container>
        <div>
          <Mockkong.UserProfile />
        </div>
        <div>
          <Mockkong.AIRecommendGoals title="AI Recommend Goals" data={AIRecommendGoals}/>
          <Mockkong.Goals data={goals}/>
        </div>
      </Container>
    </Layout>
  )
}

export async function getStaticProps({  }) {
  const { AIRecommendGoals, goals } = sampleGoals;

  // TODO ADD API

  const data = {
    AIRecommendGoals,
    goals
  };
  return {
    props: { data },
  }
}