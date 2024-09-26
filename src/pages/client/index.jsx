import './index.scss';
import { Link } from 'react-router-dom';

export default function Client() {

    return(

        <div className='pagina-cliente pagina'>
            <h1>ale cortes</h1>
            <p>faça o login</p>
            <input type="text" placeholder='Telefone Cadastrado (com DDD)'/>
            <input type="text" placeholder='senha'/>
            <Link to='/' className='links'>esqueceu a senha?</Link>
            <button>entrar</button>
        </div>
    );
}