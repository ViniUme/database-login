import styles from '../styles/comfirm.module.scss';
import Link from 'next/link'

export default function Comfirm(){
    return(
        <div className={styles.container}>
            <Link href="/"><a className={styles.link_home}>Home</a></Link>
        </div>
    );
}