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

    const response = await fetch("/api/login", init)
    if(response.status === 200){
      const MakeSession = async () => {
        const user = await response.json();
        setSession(user)
      }
      MakeSession();
    }
    else{
      return
    }
  }

  if(session === null){
    return (
      <div className={styles.container}>
        <form className={styles.form}>
          <div className={styles.division}>
            <input type="email" placeholder=" " autoComplete='none' id="email" className={styles.email} value={email} onChange={(e) => setEmail(e.target.value)} />
            <label className={styles.label} htmlFor="email">E-mail</label>
          </div>

          <div className={styles.division}>
            <input type="text" placeholder=" " autoComplete='none' id="password" className={styles.password} value={password} onChange={(e) => setPassword(e.target.value)} />
            <label className={styles.label} htmlFor="password">Password</label>
          </div>
        </form>

        <section className={styles.section_buttons}>
          <span className={styles.login} onClick={() => MakeLogin()}>Log In</span>
          <Link href="/register"><a className={styles.register}>Register</a></Link>
        </section>
      </div>
    )
  }
  else{
    return(
      <div>
        <h1>email: {session.email}</h1>
        <h1>name: {session.name}</h1>
        <h1>age: {session.age}</h1>
        <h1>phone: {session.phone}</h1>
      </div>
    );
  }
}
