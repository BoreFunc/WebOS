import Image from 'next/image'
import styles from './Background.module.css'

interface Props {
    src: string;
}

export default function Background(prop: Props){
    return (<>
        <div className={styles.BackgroundContainer}>
            <Image src={prop.src} alt='WebOSBackground' className={styles.BackgroundImage} fill={true}></Image>
        </div>
    </>)
}