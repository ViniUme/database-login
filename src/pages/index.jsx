import styles from '../styles/Index.module.scss';
import Link from 'next/link';

export default function Index() {
  return (
    <div className={styles.container}>
      <input type="text" placeholder="email" />
      <input type="text" placeholder="password" />

      <section className={styles.section_buttons}>
        <Link href="#"><a className={styles.login}>Log In</a></Link>
        <Link href="#"><a className={styles.register}>Register</a></Link>
      </section>
    </div>
  )
}
