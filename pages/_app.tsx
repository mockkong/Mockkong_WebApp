import { GetServerSidePropsContext } from 'next';
import React from 'react'
import 'tailwindcss/tailwind.css'
import SampleComponent from '../components/SampleComponent';
import SignIn from './SignIn';

function HomePage({...props}) {
  return (
    <>
      <SignIn />
      <SampleComponent />
    </>
  )
}

export default HomePage;

export const getServerSideProps = async ({ query, req }: GetServerSidePropsContext) => {
  return {
    props: {},
  };
};