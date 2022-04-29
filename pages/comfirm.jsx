import styles from '../styles/comfirm.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import img from '../public/correct.png'

export default function Comfirm(){
    return(
        <div className={styles.container}>
            <Image alt="Certo" src={img} width="100" height="100" />
            <span className={styles.message}>Seu usuário foi registrado com sucesso</span><br/>
            <span className={styles.return}>Voltar para o <Link href="/"><a className={styles.link_home}>Início</a></Link></span>
        </div>
    );
}