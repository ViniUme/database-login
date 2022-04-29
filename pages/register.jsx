import { useState } from 'react';
import Link from 'next/link'
import styles from '../styles/register.module.scss';

export default function Register(){

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [conPassword, setConPassword] = useState("");

    const PostUser = async () => {
        var check = [];
        if(name,email,age,phone,password,conPassword != "") check.push(true)
        if(password == conPassword) check.push(true)

        if(check[0],check[1] === true){
            const data = {
                "name": `${name}`,
                "email": `${email}`,
                "age": `${age}`,
                "phone": `${phone}`,
                "password": `${password}`
            }
            let init = {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }

            await fetch("/api/user", init)
                .then((response) => console.log(response))
        }
    }
    return(
        <div className={styles.container}>

            <form className={styles.form}>

                <div className={styles.division}>
                    <input type="text" autoComplete='none' placeholder=' ' id="name" className={styles.name} value={name} onChange={ e => setName(e.target.value)} />
                    <label className={styles.label} htmlFor="name">Name</label>
                </div>

                <div className={styles.division}>
                    <input type="text" autoComplete='none' placeholder=' ' id="email" className={styles.email} value={email} onChange={ e => setEmail(e.target.value)} />
                    <label className={styles.label} htmlFor="email">E-mail</label>
                </div>

                <div className={styles.division}>
                    <input type="text" autoComplete='none' placeholder=' ' id="age" className={styles.age} value={age} onChange={ e => setAge(e.target.value)} />
                    <label className={styles.label} htmlFor="age">Age</label>
                </div>

                <div className={styles.division}>
                    <input type="text" autoComplete='none' placeholder=' ' id="phone" className={styles.phone} value={phone} onChange={ e => setPhone(e.target.value)} />
                    <label className={styles.label} htmlFor="phone">Phone</label>
                </div>

                <div className={styles.division}>
                    <input type="text" autoComplete='none' placeholder=' ' id="password" className={styles.password} value={password} onChange={ e => setPassword(e.target.value)} />
                    <label className={styles.label} htmlFor="password">Password</label>
                </div>

                <div className={styles.division}>
                    <input type="text" autoComplete='none' placeholder=' ' id="comfirm" className={styles.confirm_password} value={conPassword} onChange={ e => setConPassword(e.target.value)} />
                    <label className={styles.label} htmlFor="comfirm">Comfirm Password</label>
                </div>

            </form>

            <Link href="/comfirm"><a><button className={styles.button} onClick={() => PostUser()}>Register</button></a></Link>

        </div>
    );
}