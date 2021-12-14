import Head from 'next/head';
import Layout from '../components/Layout';
import Container from '../components/Container';
import * as Mockkong from '../components/mockkong';
import Plans from '../contexts/sampleData/samplePlans.json';

export default function Dashboard({ ...props }) {
  const { plans } = props.data;

  return (
    <Layout>
      <Head>
        <title>Next.js Blog Example</title>
      </Head>
      <Container>
        <Mockkong.UserProfile />
        <Mockkong.Plans data={plans}/>
      </Container>
    </Layout>
  )
}

export async function getStaticProps({  }) {
  const data = {
    plans: Plans.plans
  };
  return {
    props: { data },
  }
}