import { useEffect, useState } from 'react';
import Head from 'next/head';
import * as api from '../app/api';
import Layout from '../components/Layout';
import Container from '../components/Container';
import * as Mockkong from '../components/mockkong';
import sampleGoals from '../contexts/sampleData/sampleGoals.json';
import Button from '@mui/material/Button';

export default function Dashboard({ ...props }) {
  const [AIRecommendGoals, setAIRecommendGoals] = useState(sampleGoals.AIRecommendGoals);
  const [myGoals, setMyGoals] = useState(sampleGoals.goals);
  const [registerGoalOpen, setRegisterGoalOpen] = useState(false);

  useEffect(() => {
    getMyGoals();
  },[])

  async function getMyGoals() {
    const myGoalsData = await api.getMyGoals();
    setMyGoals(myGoalsData);
  }

  const openRegisterGoal = () => {
    setRegisterGoalOpen(true)
  }
  const closeRegisterGoal = () => {
    setRegisterGoalOpen(false);
    getMyGoals();
  }

  return (
    <Layout>
      <Head>
        <title>Next.js Blog Example</title>
      </Head>
      <Container>
        <div>
          <Mockkong.UserProfile />
          <Button
            type="button"
            fullWidth
            variant="contained"
            onClick={openRegisterGoal}
            sx={{ mt: 3 }}>
            OK
          </Button>
          {registerGoalOpen && <Mockkong.RegisterGoal closeModal={closeRegisterGoal}/>}
        </div>
        <div>
          <Mockkong.AIRecommendGoals title="AI Recommend Goals" data={AIRecommendGoals} />
          <Mockkong.MyGoals data={myGoals} />
        </div>
      </Container>
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