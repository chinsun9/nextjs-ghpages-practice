import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <div>
        this is index page
      </div>

      <div>
        links:
        <Link href="/about" passHref>
          about
        </Link>
      </div>
    </div>
  )
}

export default Home
