import styles from './App.module.css'
import Navbar from './components/Navbar/Navbar'

import MainImageMobile from './assets/images/image-web-3-mobile.jpg'
import MainImageDesktop from './assets/images/image-web-3-desktop.jpg'

function App() {
  return (
    <div className={styles.container}>
      <Navbar />

      <main>
        <section>
          <div>
            <img src={MainImageMobile} alt="" />
          </div>

          <div>
            <h1 className={styles.headline}>The Bright Future of Web 3.0?</h1>
          </div>

          <div>
            <p className={styles.paragraph}>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people.
              But it's really fulfilling its promise?</p>

            <button className={styles.button}>READ MORE</button>
          </div>
        </section>

        <section className={styles.news_container}>
          <h2>New</h2>

          <div className={styles.news}>
            <h3>Hydrogen VS Electric Cars</h3>

            <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
          </div>

          <div className={styles.divisor}></div>

          <div className={styles.news}>
            <h3>The Downsides of AI Artistry</h3>

            <p>What are the possible adverse effects of on-demand AI image generation?</p>
          </div>

          <div className={styles.divisor}></div>

          <div className={styles.news}>
            <h3>Is VC Funding Drying Up?</h3>

            <p>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
          </div>
        </section>

        <section className={styles.other_news}>
          <div>
            <img src="" alt="" />

            <div>
              <h2>01</h2>

              <h3>Reviving Retro PCs</h3>

              <p>What happens when old PCs are given modern upgrades?</p>
            </div>
          </div>

          <div>
            <img src="" alt="" />

            <div>
              <h2>02</h2>

              <h3>Top 10 Laptops of 2022</h3>

              <p>Our best picks for various needs and budgets.</p>
            </div>
          </div>

          <div>
            <img src="" alt="" />

            <div>
              <h2>03</h2>

              <h3>The Growth of Gaming</h3>

              <p>How the pandemic has sparked fresh opportunities.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
