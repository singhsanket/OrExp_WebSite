import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const LoginForm = () => {
    const[cont,setCount]=useState({
        email:'',
        password:'',
    });
    const router=useRouter();
    const handleLogin=(e)=>
    {
        e.preventDefault();
        const users=JSON.parse(localStorage.getItem('users')) || [];
        const valid= users.find(item=> item.email===cont.email && item.password===cont.password);
        if(valid)
        {
            localStorage.setItem('loggedInUser',JSON.stringify(valid));
            alert('Successfully Loggedin');
            router.push('/homepage');
        }
        else
        {
            alert('Invalid email and passowrd');
        }

    }
  return (
    <div style={styles.container}>
        <form onSubmit={handleLogin} style={styles.form}>

            <input type='email' placeholder='Enter your email'
            value={cont.email}
            onChange={(e)=>setCount({...cont,
                email:e.target.value
            })}
            required style={styles.input} />

            <input type='password' placeholder='Enter your password' 
            value={cont.password}
            onChange={(e)=>setCount({...cont,
                password:e.target.value
            })}
            required style={styles.input}  />
            <button type='submit' style={styles.button}>Login</button>
            <p>go to register page if not registered ? <Link href='/register'>Register</Link></p>
        </form>
        

    </div>
  )
}

export default LoginForm

const styles = {
    container: {
      display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#1f0f0f'
    },
    form: {
      background: 'white', padding: '2rem', borderRadius: '8px', boxShadow: '0 0 10px rgba(0.3,0.3,0.3,0.3)', minWidth: '300px'
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