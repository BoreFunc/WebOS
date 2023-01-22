"use client";
import Image from 'next/image'
//import NoSSR from 'react-no-ssr'
import styles from './page.module.css'
import { env } from 'process'

import WebOSTerminalComponent from '../components/Terminal/WebOSTerminalComponent';
//import WebOSTerminalComponent from '@/components/Terminal/Terminal';
import Background from './Background/Background';

const WebOSVersion = env["VERSION"]
const WebOSBuild = env["BUILD"]
const WebOSBackground = env["BACKGROUND"] as string

export default function Home() {
  return (
    <main className={styles.main}>
      <WebOSTerminalComponent />
      <Background src={WebOSBackground}/>
    </main>
  )
}
