import { useEffect, useState } from 'react';
import Router from 'next/router';
import Layout from 'components/Layout';
import Container from 'components/Container';

export default function Index({ ...props }) {
  const [view, setView] = useState(false);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    setView(false);
    const data = localStorage.getItem("mockkong_data$$user_data");
    if (data) {
      setUserData(JSON.parse(data));
      setView(true);
    } else {
      Router.push("/signin");
    }
  }, []);

  return (
    <>
      {view &&
        <Layout>
          <Container>
            <a href="/dashboard">대시보드로 가기</a>
          </Container>
        </Layout>
      }
    </>
  )
}

export async function getStaticProps({  }) {
  const data = {
  };
  return {
    props: { data },
  }
}