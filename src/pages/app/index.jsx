import './index.scss';
import { Link } from 'react-router-dom';

export default function App() {

  return (
    <div className="App">
      <div className='pagina-inicial pagina'>
        <header className='cabecalho'>
          <img src="/assets/images/logo.png" className='logo' />
          
          <div className='grupos-textos'>
            <p>home</p>
            <p>nossa marca</p>
            <p>barba e cabelo</p>
            <p>nossa unidade</p>
            <p>mais</p>
          </div>
          
        </header>
        
        <Link to='/client'>oidsoadi</Link>
      </div>
    </div>
  );
}

