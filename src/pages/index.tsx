import Layout from '../components/Layout';
import Container from '../components/Container';

export default function Index({ ...props }) {
  return (
    <>
      <Layout>
        <Container>
        </Container>
      </Layout>
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