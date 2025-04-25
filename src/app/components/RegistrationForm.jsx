import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const RegistrationForm = () => {
    const [user,setUsers]=useState(
        {
            name:"",
            email:"",
            password:"",
        }
    );
    const router=useRouter();

    const hnadleSubmit=(e)=>
    {
        e.preventDefault();
        const users=JSON.parse(localStorage.getItem('users')) || [];
        const exist=users.find(item =>  item.email===user.email );
        if(exist)
        {
            alert('already registered');
        }
        else{
            users.push(user);
            localStorage.setItem('users',JSON.stringify(users));
            alert('registered succesfull ');
            router.push("/login");
        }
    }


  return (
    <div style={styles.container}>
        <form onSubmit={hnadleSubmit} style={styles.form}>

            <input type='text' name='name' placeholder='Enter your name' 
            value={user.name}
            onChange={(e)=>setUsers({...user,name:e.target.value})}
            required style={styles.input}
            />

            <input type='email' name='email' placeholder='Enter your email'
            value={user.email}
            onChange={(e)=>setUsers({...user,email:e.target.value})}
            required   style={styles.input}
            />

            <input type='password' name='password' placeholder='Enter your password'
            value={user.password}
            onChange={(e)=>setUsers({...user,password:e.target.value})}
            required   style={styles.input}
            />
            <button type='submit' style={styles.button}>Register</button>
            <p>go to register page if not registered ? <Link href='/login'>Login</Link></p>

        </form>

    </div>
  )
}

export default RegistrationForm


const styles = {
    container: {
      display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#f9f9f9'
    },
    form: {
      background: 'white', padding: '2rem', borderRadius: '8px', boxShadow: '0 0 10px rgba(0,0,0,0.1)', minWidth: '300px'
    },
    heading: {
      marginBottom: '1.5rem', textAlign: 'center'
    },
    input: {
      width: '100%', padding: '10px', marginBottom: '1rem', borderRadius: '4px', border: '1px solid #ccc'
    },
    button: {
      width: '100%', padding: '10px', borderRadius: '4px', border: 'none', backgroundColor: '#0070f3', color: '#fff', cursor: 'pointer'
    }
  };