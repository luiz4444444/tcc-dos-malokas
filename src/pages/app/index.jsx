import './index.scss';
import { Link } from 'react-router-dom';

export default function App() {

  return (
    <div className="App">
      <div className='pagina-inicial pagina'>
        <h1>ale cortes</h1>
        <h2>agende seu horario</h2>
        <h3>online</h3>
        <p>escolha o serviço, dia e horario <br /> que deseja ser atendido</p>
        <button>agendar</button>
        <button>area cliente</button>
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
        <Link to='/clint'></Link>
      </div>
    </div>
  );
}

