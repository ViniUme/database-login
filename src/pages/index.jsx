import styles from '../styles/Index.module.scss';

export default function Index() {
  return (
    <div className={styles.container}>
      <input type="text" placeholder="email" />
      <input type="text" placeholder="password" />
    </div>
  )
}
