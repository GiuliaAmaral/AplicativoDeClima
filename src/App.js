import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

export default function App() {

  const [carregando, setCarregando] = useState(true);

  // Função do react que é executada sempre que o componente é carregando
  useEffect(() => {

    setCarregando(false);

  }, [])


  return (<>
    {
      carregando ? (<>
        <h1>Carregando...</h1>
      </>) : (<div className="fundoNuvem">

        <nav class="navbar navbar-light bg-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="#"><i class="bi bi-plus-lg" style={{fontSize: "1.5em"}}></i></a>
          </div>
        </nav>

      </div>)
    }

  </>);
}
