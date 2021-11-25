import Navbar from './common/navbar';
import Footer from './common/footer';
import Meta from './common/meta';

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <Navbar />
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}