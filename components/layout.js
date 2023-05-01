import Head from "next/head";
import Navbar from './navbar'
import Footer from './footer'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
        <meta name="description" content="TechnologyとConvenienceを組み合わせた造語。​ChatGPTなどのAI技術がもたらす便利なものを紹介します。" />
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}