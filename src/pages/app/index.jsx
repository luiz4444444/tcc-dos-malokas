import './index.scss';
import { Link } from 'react-router-dom';

export default function App() {

  return (
    <div className="App pagina">
      <header className='cabecalho'>
        <div className='area-logo'>
          <img src="/assets/images/logo.png" className='logo'/>
        </div>
        <div className='area-links'>
          <p>home</p>
          <p>sobre nos</p>
          <p>serviços</p>
          <p>contatos</p>
        </div>
        <div className='botao'>
          <Link to="/client" className='link-botao'>Clientes</Link>
        </div>
        
      </header>
    </div>
  );
}

