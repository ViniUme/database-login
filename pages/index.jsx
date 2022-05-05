import styles from '../styles/index.module.scss';
import Link from 'next/link';
import { useState } from 'react';
import Loading from '../components/Loading'

export default function Index() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [session, setSession] = useState("none");

  const [error, setError] = useState("");

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

    setSession("loading");
    const response = await fetch("/api/login", init)
    if(response.status === 200){
      const MakeSession = async () => {
        const user = await response.json();
        setSession(user)
      }
      MakeSession();
    }
    else{
      setError("Usuário não existe")
    }
  }

  if(session === "none"){
    return (
      <div className={styles.container}>
        <form className={styles.form}>
          <div className={styles.division}>
            <input type="email" placeholder=" " autoComplete='off' id="email" className={styles.email} value={email} onChange={(e) => setEmail(e.target.value)} />
            <label className={styles.label} htmlFor="email">E-mail</label>
          </div>

          <div className={styles.division}>
            <input type="text" placeholder=" " autoComplete='off' id="password" className={styles.password} value={password} onChange={(e) => setPassword(e.target.value)} />
            <label className={styles.label} htmlFor="password">Senha</label>
          </div>
        </form>

        <span className={styles.error}>{error}</span>

        <section className={styles.section_buttons}>
          <span className={styles.login} onClick={() => MakeLogin()}>Login</span>
          <Link href="/register"><a className={styles.register}>Cadastrar</a></Link>
        </section>
      </div>
    )
  }
  else if(session === "loading"){
    return(
      <div className={styles.loading}>
        <Loading/>
      </div>
    )
  }
  else{
    return(
      <div className={styles.container_2}>

        <div className={styles.section}>

          <span className={styles.data}>E-mail: {session.email}</span>
          <span className={styles.data}>Nome: {session.name}</span>
          <span className={styles.data}>Idade: {session.age}</span>
          <span className={styles.data}>Celular: {session.phone}</span>

        </div>

      </div>
    );
  }
}
