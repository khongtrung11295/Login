import logo from './logo.svg';
import './App.css';
import image from './Logo.png'

function App() {
  return (
    <div className='body'>
      <div className='header'>
        <div className='boxed'>
            <div className='boxed-logo'>
              <img src={image}  alt="image-1"/>
            </div>
            <div className='boxed-text'>
              <h1 className='h1-login'>Login</h1>
              <span>Wellcome back, log in to the <br/>admin account to continue.</span>
            </div>
            <div className='boxed-input'>
              <span>Email</span>
              <input type='text' className='form-input' value={'Input Email'}/>
            </div>
            
            <div className='boxed-btn'> 
              <button className='btn-1' >NEXT</button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
