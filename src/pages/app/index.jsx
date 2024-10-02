import './index.scss';
import { Link } from 'react-router-dom';

export default function App() {

  return (
    <div className="App">
      <div className='pagina-inicial pagina'>
        <header className='cabecalho'>
          <div className='teste'>
            <img src="/assets/images/logo.png" className='logo' />
          </div>

          <div className='grupos-textos'>
            <p>home</p>
            <p>nossa marca</p>
            <p>barba e cabelo</p>
            <p>nossa unidade</p>
            <p>mais</p>

          </div>

            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor reprehenderit, veniam temporibus nam, vitae nobis dolores excepturi cupiditate minima sit porro aperiam totam eius harum quisquam repellendus, rem fuga eaque.</h1>
          
        </header>
      
        <Link to='/client'>oidsoadi</Link>
      </div>
    </div>
  );
}

