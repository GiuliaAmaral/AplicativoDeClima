import { useEffect } from 'react';

export default function Msg(props) {

  // Função do react que é executada sempre que o componente é carregando
  useEffect(() => {


  }, [])




  return (<>
    <div class="container text-center mt-5">
      {props.msg.icon}
      <h1>{props.msg.titulo}</h1>
      <p>{props.msg.msg}</p>
      {props.msg.btn}
    </div>


  </>);
}
