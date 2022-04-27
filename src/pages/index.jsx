import styles from '../styles/index.module.scss';
import Link from 'next/link';
import { useState } from 'react';

export default function Index() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [session, setSession] = useState(null);

  const MakeLogin = async () => {
    const data = {
      email: email,
      password: password
    }
    const init = {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }

    await fetch("/api/login", init)
      .then((response) => {
        if(response.status == 200){
          setSession(true);
        }
      });
  }

  if(session === null){
    return (
      <div className={styles.container}>
        <form className={styles.form}>
          <input type="email" placeholder="email" autoComplete='none' className={styles.emial} value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="text" placeholder="password" autoComplete='none' className={styles.password} value={password} onChange={(e) => setPassword(e.target.value)} />
        </form>

        <section className={styles.section_buttons}>
          <h2 className={styles.login} onClick={() => MakeLogin()}>Log In</h2>
          <Link href="/register"><a className={styles.register}>Register</a></Link>
        </section>
      </div>
    )
  }
  else{
    return(
      <div>
        <h1>logado</h1>
      </div>
    );
  }
}
