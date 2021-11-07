import { useEffect } from 'react';

export default function Carregando(props) {

  // Função do react que é executada sempre que o componente é carregando
  useEffect(() => {


  }, [])




  return (<>
    <div class="container text-center mt-5">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Carregando...</span>
      </div>
    </div>


  </>);
}
