'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Cart from './components/Cart';
import Category from './components/Category';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Shop from './components/Shop';
const HomePage = () => {
  const [cart, setCart] = useState([]);
  const [show, setShow] = useState(true);

  //creating the logout 
  const[user,setUser]=useState(null);
  const router=useRouter();

  useEffect(()=>
  {
    const data=localStorage.getItem('loggedInUser');
   if(data)
   {
    setUser(JSON.parse(data));
   }
  },[]);

  const handleLogout=()=>
  {
    localStorage.removeItem('loggedInUser');
    router.push('/login');
  }

  const handleClick = (item) => {
    let isPresent = false;
    cart.forEach((product) => {
      if (item.id === product.id) {
        isPresent = true;
      }
    });

    if (isPresent) {
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, 2000);
      return;
    }
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    let ind = -1;
    cart.forEach((data, index) => {
      if (data.id === item.id) ind = index;
    });
    const tempArr = cart;
    tempArr[ind].amount += d;
    console.log(tempArr);

    if (tempArr[ind].amount === 0) {
      tempArr[ind].amount = 1;
    }
    setCart([...tempArr]);
  };

  return (
    <div>
      <Header size={cart.length} setShow={setShow} onLogout={handleLogout}/>
      <Category />
      

      {show ? (
        <>
          <Hero />
          <Shop handleClick={handleClick} />
          <Footer/>
        </>
      ) : (
        <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
      )}
      
    </div>
  );
};

export default HomePage;