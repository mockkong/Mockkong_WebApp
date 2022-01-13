import { useEffect, useState } from 'react';
import Head from 'next/head';
import * as api from 'app/api';
import Layout from 'components/Layout';
import Container from 'components/Container';
import * as Mockkong from 'components/mockkong';
import sampleGoals from 'contexts/sampleData/sampleGoals.json';
import { MockkongStyled } from 'components/mockkong/MockkongStyled';
import { itemData } from '../contexts/sampleData/itemData'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function Dashboard({ ...props }) {
  const [registerGoalOpen, setRegisterGoalOpen] = useState(false);
  const [AIRecommendGoals, setAIRecommendGoals] = useState(sampleGoals.AIRecommendGoals);
  const [myGoals, setMyGoals] = useState(sampleGoals.goals);
  const [userData, setUserData] = useState();

  useEffect(() => {
    getUserData();
    getAIRecommendGoals();
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

  return (
    <Layout>
      <Head>
        <title>Next.js Blog Example</title>
      </Head>

      <Container>
        <Mockkong.UserProfile userData={userData} className="UserProfile" openRegisterGoal={openRegisterGoal} />
        <MockkongStyled.DashboardGoals className='DashboardGoals'>
          <Mockkong.AIRecommendGoals title="AI Recommend Goals" data={AIRecommendGoals} />
          <Mockkong.MyGoals data={myGoals} />

          {/* <ImageList variant="masonry" cols={3} gap={8}>
            {itemData.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList> */}
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