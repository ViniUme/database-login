import styles from '../styles/Index.module.css';
import { Button } from 'react-bootstrap';

export default function Index() {
  return (
    <div className={styles.container}>
      <Button variant="primary">teste</Button>
      <Button variant="secondary">Secondary</Button>
    </div>
  )
}
