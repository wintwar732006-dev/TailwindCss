import Navbar from './components/navbar.jsx';
import HomeContainer from './components/home.jsx';
import { useState } from 'react';

const Home = () => {

  const [element, setElement] = useState("Product");

  return (
    <div className='w-full flex flex-col'>
      <Navbar element={element} setElement={setElement}/>
      <HomeContainer element={element}/>
    </div>
  )
}

export default Home