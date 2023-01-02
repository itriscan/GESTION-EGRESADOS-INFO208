import fcilogo from '../fci-logo.png';
import './style/App.css'

function Header(){
    return(
        <div className="App">
          <div className="App-Upper">
            <div className='App-Upper-Decor1'></div>
            <div className='App-Upper-Decor2'>
              <div className='App-Upper-Decor2-text'>Egresados Facultad de Ciencias de la Ingeniería</div>
              <img src={fcilogo} className="App-Upper-Decor2-logo" alt="fci-logo" />
            </div>
            <div className='App-Upper-Menu'>
              <a className='App-Upper-Menu-Button' href='http://localhost:3000/'>FORMULARIO</a>
              <a className='App-Upper-Menu-Button' href='http://localhost:3002/user'>EGRESADOS</a>
              
            </div>
          </div>
        </div>
    );

}

export default Header;

