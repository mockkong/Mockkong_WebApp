import { useEffect, useState } from 'react';
import Head from 'next/head';
import * as api from 'app/api';
import Layout from 'components/Layout';
import Container from 'components/Container';
import * as Mockkong from 'components/mockkong';
import sampleGoals from 'contexts/sampleData/sampleGoals.json';

export default function Dashboard({ ...props }) {
  const [registerGoalOpen, setRegisterGoalOpen] = useState(false);
  const [AIRecommendGoals, setAIRecommendGoals] = useState(sampleGoals.AIRecommendGoals);
  const [myGoals, setMyGoals] = useState(sampleGoals.goals);

  const openRegisterGoal = () => {
    setRegisterGoalOpen(true)
  }
  const closeRegisterGoal = () => {
    setRegisterGoalOpen(false);
    getMyGoals();
  }

  useEffect(() => {
    getAIRecommendGoals();
    getMyGoals();
  },[])

  async function getMyGoals() {
    const goals = await api.getMyGoals();
    setMyGoals(goals);
  }

  async function getAIRecommendGoals() {
    const goals = await api.getAIRecommendGoals();
    setAIRecommendGoals(goals);
  }

  return (
    <Layout>
      <Head>
        <title>Next.js Blog Example</title>
      </Head>
      <Container>
        <Mockkong.UserProfile getMyGoals={getMyGoals} openRegisterGoal={openRegisterGoal} />
        <div>
          <Mockkong.AIRecommendGoals title="AI Recommend Goals" data={AIRecommendGoals} />
          <Mockkong.MyGoals data={myGoals} />
        </div>
      </Container>

      {registerGoalOpen && <Mockkong.RegisterGoal closeModal={closeRegisterGoal}/>}
    </Layout>
  )
}

export async function getStaticProps({...props}) {
  const { AIRecommendGoals } = sampleGoals;

  const data = {
    AIRecommendGoals,    
  };
  return {
    props: { data },
  }
}