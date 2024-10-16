import './index.scss';
import { Link } from 'react-router-dom';

export default function App() {

  return (
    <div className="App pagina">

      <header className='cabecalho'>
        <img src="/assets/images/logo.png" className='logo'/>
        <div className='area-links'>
          <p>Home</p>
          <p>Sobre Nós</p>
          <p>Serviços</p>
        </div>
          <img src="/assets/images/text.png" className='text-foto' />
        <div className='area-links'>
          <p>shop</p>
          <p>contato</p>
        </div>
        <img src="/assets/images/contat.png" className='contat-foto' />
      </header>
      <div className='texto'>
        <h1 className='titulo-text'>Curta nossos serviços de barbeiro</h1>
        <p className='introducao'>Estabeleça seu novo visual incrível com os serviços da Ale Cortes! </p>
        <p className='introducao'>De cortes de cabelo até a barbas perfeitas, </p>  
        <p className='introducao'>você pode experimentar o melhor nivel de barbaria na área</p>
      </div>


        <div className='botao'>
          <Link to="/client" className='link-botao'>agende aqui</Link>
        </div>
    </div>
  );
}

