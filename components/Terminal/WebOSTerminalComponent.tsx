"use client";
import dynamic from 'next/dynamic'
const WebOSTerminalComponent = dynamic(() => import('./Terminal'), {
    ssr: false
})
export default WebOSTerminalComponent