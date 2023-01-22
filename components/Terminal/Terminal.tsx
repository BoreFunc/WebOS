"use client";
import { useEffect } from 'react';
import { Terminal } from 'xterm';
import { FitAddon } from 'xterm-addon-fit';
import styles from './Terminal.module.css';
import 'xterm/css/xterm.css';

const WebOSTerminalComponent = () => {
    useEffect(() => {
        const term = new Terminal({
            cursorBlink: true,
            cursorStyle: 'block',
            //fontFamily: '',
            fontSize: 16,
            fontWeight: 'normal',
            lineHeight: 1,
            letterSpacing: 0,
            theme: {
                background: '#000000',
                foreground: '#ffffff',
                black: '#000000',
                blue: '#0000ff',
                brightBlack: '#808080',
                brightBlue: '#0000ff',
                brightCyan: '#00ffff',
            } 
        })
        // Set Columns and Raws
        term.resize(80, 24);
        const fitAddon = new FitAddon();
        term.loadAddon(fitAddon);
        console.log("Before open")
        term.open(document.getElementById(styles.Terminal) as HTMLElement);
        console.log("after open")
        term.write('WebOS Terminal\r\n');
        term.write('Running on WebOS 0.1.0\r\n')
        switch (Math.floor(Math.random() * 6)){
            case 0:
                term.write('Welcome to WebOS\r\n');
            case 1:
                term.write('Maybe we\'re just sleepwalking. \r\n');
            case 2:
                term.write('Beep-beep, m**********r! \r\n');
            case 3:
                term.write('WHERE VERNAL WINDS WILL NEVER BLOW\r\n');
            case 4:
                term.write('')
            case 5:
                term.write('')
        }
        term.write('$ ');
        term.onKey((data) => {
            //for (let i = 0; i < data.length; i++) {
                switch (data.key){
                    case '\x08':
                        term.write('\b \b');
                    case '\r':
                        term.write('\r\n$ ');
                    default:
                        term.write(data.key);

                }
            //}
        })
    });
    return <div id={styles.Terminal} className={styles.Terminal}/>;
};

export default WebOSTerminalComponent;