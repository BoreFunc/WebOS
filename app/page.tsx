import Image from 'next/image'
import styles from './page.module.css'
import { env } from 'process'

const WebOSVersion = env["VERSION"]
const WebOSBuild = env["BUILD"]

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.title}>
        <h1>
          WebOS
        </h1>
        <p>
          WebOS {WebOSVersion} {WebOSBuild}
        </p>
        <p>
          Please Login to use WebOS
        </p>
      </div>
    </main>
  )
}
