import { useEffect, useState } from 'react';
import Head from 'next/head';
// import { BrowserView, MobileView } from 'react-device-detect';
import * as api from 'app/api';
import Layout from 'components/Layout';
import Container from 'components/Container';
import * as Mockkong from 'components/mockkong';
import sampleGoals from 'contexts/sampleData/sampleGoals.json';
import { MockkongStyled } from 'components/mockkong/MockkongStyled';
import { cardData } from '../contexts/sampleData/cardData';
import { TGoal } from 'global-types';

export default function Dashboard({ ...props }) {
  const [registerGoalOpen, setRegisterGoalOpen] = useState(false);
  const [AIRecommendGoals, setAIRecommendGoals] = useState(cardData);
  const [myGoals, setMyGoals] = useState(sampleGoals.goals);
  const [userData, setUserData] = useState();

  useEffect(() => {
    getUserData();
    // getAIRecommendGoals();
    getMyGoals();
  },[])

  const openRegisterGoal = () => {
    setRegisterGoalOpen(true)
  }
  const closeRegisterGoal = () => {
    setRegisterGoalOpen(false);
    getMyGoals();
  }

  async function getUserData() {
    const userData = await api.getUserData();
    console.log('userData', userData)
    setUserData(userData);
  }

  async function getMyGoals() {
    const goals = await api.getMyGoals();
    console.log('getMyGoals', goals)
    setMyGoals(goals);
  }

  async function getAIRecommendGoals() {
    const goals = await api.getAIRecommendGoals();
    setAIRecommendGoals(goals);
  }

  async function registerGoal(goalData: TGoal) {
    console.log('goalData', goalData);
    const result = await api.registerGoal(goalData);
    console.log('result', result);
    getMyGoals();
  }

  const handleGoalDelete = async (goalId: string) => {
    const result = await api.deleteGoal(goalId);
    getMyGoals();
  }

  return (
    <Layout>
      <Head>
        <title>Next.js Blog Example</title>
      </Head>

      <Container>
        <Mockkong.UserProfile userData={userData} className="UserProfile" openRegisterGoal={openRegisterGoal} />

        <MockkongStyled.DashboardGoals className='DashboardGoals'>
          <Mockkong.AIRecommendGoals data={AIRecommendGoals} registerGoal={registerGoal}/>
          <Mockkong.MyGoals data={myGoals} handleGoalDelete={handleGoalDelete} />
        </MockkongStyled.DashboardGoals>
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