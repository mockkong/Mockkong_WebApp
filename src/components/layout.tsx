import Head from 'next/head';
import Meta from './common/Meta';
import Navbar from './common/Navbar';
import Footer from './common/Footer';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Next.js Blog Example</title>
      </Head>
      <Meta />
      <Navbar />
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
      {/* <Footer /> */}
    </>
  )
}