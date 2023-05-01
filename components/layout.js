import Head from "next/head";
import Navbar from './navbar'
import Footer from './footer'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
        <meta name="description" content="TechnologyとConvenienceを組み合わせた造語。​ChatGPTなどのAI技術がもたらす便利なものを紹介します。" />
        <meta property="og:image"  contents="https://cdn-ak.f.st-hatena.com/images/fotolife/d/duo-taro100/20230501/20230501153944.jpg"></meta>
      </Head>
      <Navbar />
      <nav className="navbar navbar-expand navbar-light bg-dark">
        <div className="container">
          <div className="text-center text-white w-100">
            <ul className="navbar-nav nav-justified " style={{width:'100%'}}>
              <li className="nav-item">
                <a className="nav-link text-white" aria-current="page" href={`https://eurekayamauchi.github.io/`}>
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white " aria-current="page" href={`https://eurekayamauchi.github.io/ai-post/`}>
                  AI
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link  text-white" aria-current="page" href={`https://eurekayamauchi.github.io/tech/`}>
                  テクノロジー
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <main>{children}</main>
      <Footer />
    </>
  )
}