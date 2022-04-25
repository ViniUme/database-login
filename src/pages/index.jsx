import styles from '../styles/Index.module.scss';
import Link from 'next/link';

export default function Index() {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <input type="email" placeholder="email" autoComplete='none' className={styles.emial} />
        <input type="text" placeholder="password" autoComplete='none' className={styles.password} />
      </form>

      <section className={styles.section_buttons}>
        <Link href="#"><a className={styles.login}>Log In</a></Link>
        <Link href="/register"><a className={styles.register}>Register</a></Link>
      </section>
    </div>
  )
}
