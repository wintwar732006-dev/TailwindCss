import Navbar from './components/navbar.jsx';
import HomeContainer from './components/home.jsx';

const Home = () => {
  return (
    <div className='w-full flex flex-col bg-[#020617]'>
      <Navbar />
      <HomeContainer />
    </div>
  )
}

export default Home