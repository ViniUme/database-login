import { useState } from 'react';
import styles from '../styles/Register.module.scss';

export default function Register(){

    const [name, setName] = useState("");
    const [emial, setEmail] = useState("");
    const [age, setAge] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [conPassword, setConPassword] = useState("");

    return(
        <div className={styles.container}>

            <form className={styles.form}>
                <input type="text" autoComplete='none' placeholder='name' className={styles.name} value={name} onChange={ e => setName(e.target.value)} />
                <input type="text" autoComplete='none' placeholder='email' className={styles.email} value={emial} onChange={ e => setEmail(e.target.value)} />
                <input type="text" autoComplete='none' placeholder='age' className={styles.age} value={age} onChange={ e => setAge(e.target.value)} />
                <input type="text" autoComplete='none' placeholder='phone' className={styles.phone} value={phone} onChange={ e => setPhone(e.target.value)} />
                <input type="text" autoComplete='none' placeholder='password' className={styles.password} value={password} onChange={ e => setPassword(e.target.value)} />
                <input type="text" autoComplete='none' placeholder='confirm password' className={styles.confirm_password} value={conPassword} onChange={ e => setConPassword(e.target.value)} />
            </form>

            <button className={styles.button}>Register</button>

        </div>
    );
}