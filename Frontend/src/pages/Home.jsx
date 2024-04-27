import './Home.css'
import  arrow from '../Assets/arrow.png'
function Home() {
    return (
      <div className='home container'>
        <div className='home-text'> 
        <h1>Success is not final, failure is not fatal: It is the courage to continue that counts</h1>
        <p>Challenge your coding standards and elevate your skills to new heights</p>
        {/* <button className='aarbtn'>Explore more <img src ={arrow} alt=''/></button> */}
        </div>
      </div>
    );
  }
  
  export default Home;