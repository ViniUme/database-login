import { useState } from 'react';
import Link from 'next/link'
import styles from '../styles/register.module.scss';
//import { CreateUser } from '../utils/database'

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
                <input type="text" autoComplete='none' placeholder='name' className={styles.name} value={name} onChange={ e => setName(e.target.value)} />
                <input type="text" autoComplete='none' placeholder='email' className={styles.email} value={email} onChange={ e => setEmail(e.target.value)} />
                <input type="text" autoComplete='none' placeholder='age' className={styles.age} value={age} onChange={ e => setAge(e.target.value)} />
                <input type="text" autoComplete='none' placeholder='phone' className={styles.phone} value={phone} onChange={ e => setPhone(e.target.value)} />
                <input type="text" autoComplete='none' placeholder='password' className={styles.password} value={password} onChange={ e => setPassword(e.target.value)} />
                <input type="text" autoComplete='none' placeholder='confirm password' className={styles.confirm_password} value={conPassword} onChange={ e => setConPassword(e.target.value)} />
            </form>

            <Link href="/comfirm"><a><button className={styles.button} onClick={() => PostUser()}>Register</button></a></Link>

        </div>
    );
}