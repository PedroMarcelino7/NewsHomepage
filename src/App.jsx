import styles from './App.module.css'
import Navbar from './components/Navbar/Navbar'

import MainImageMobile from './assets/images/image-web-3-mobile.jpg'
import MainImageDesktop from './assets/images/image-web-3-desktop.jpg'

function App() {
  return (
    <div className={styles.container}>
      <Navbar />

      <main>
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
      </main>
    </div>
  )
}

export default App
