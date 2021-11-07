import { useEffect, useState } from 'react';
import { useReactPWAInstall } from "react-pwa-install";
import $ from 'jquery';
import Inicio from './paginas/Inicio';
import Carregando from './componentes/Carregando';
import favClima from './fav-clima.png'

export default function App() {

  const { pwaInstall, supported, isInstalled } = useReactPWAInstall();
  const [carregando, setCarregando] = useState(true);
  const [router, setRouter] = useState("Inicio");

  const handleClick = () => {
    pwaInstall({
      title: "Clima",
      logo: favClima
    })
      .then(() => alert("Siga as instruções para instalação."))
  };

  // Função do react que é executada sempre que o componente é carregando
  useEffect(() => {
    setCarregando(false);

    setInterval(() => {
      $("a.router").on("click", async (event) => {
        const botao = $(event.currentTarget);
        event.preventDefault();
        await setCarregando(true);
        await setRouter(botao.attr("href"));
        await setCarregando(false);
      })
    }, 500);
  }, [])


  return (<>
    {
      carregando ? (<>
        <Carregando></Carregando>
      </>) : (<>

        {
          router === "Inicio" && (<Inicio />)
        }

      </>
      )
    }

    {supported() && !isInstalled() && (
      <div className="d-flex justify-content-center">
        <div class="toast show position-fixed bottom-0 mb-3 " role="alert" aria-live="assertive" aria-atomic="true">
          <div class="toast-body">
            Deseja instalar esse App no seu cell?
            <div class="mt-2 pt-2 border-top">
              <button type="button" class="btn btn-primary btn-sm me-3" onClick={handleClick}>Sim, instalar app</button>
              <button type="button" class="btn btn-secondary btn-sm" data-bs-dismiss="toast">Não</button>
            </div>
          </div>
        </div>
      </div>
    )}

  </>);
}
