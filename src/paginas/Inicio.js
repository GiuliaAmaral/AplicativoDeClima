import { useEffect, useState } from 'react';
import Carregando from '../componentes/Carregando';
import Msg from '../componentes/Msg';

export default function Inicio() {

  const [carregando, setCarregando] = useState(true);
  const [msg, setMsg] = useState(null);
  const [pesquisando, setPesquisando] = useState(false);
  const [dadosCidade, setDadosCidade] = useState({});



  // Função do react que é executada sempre que o componente é carregando
  useEffect(() => {
    (async () => {

      if (window.navigator.geolocation) {
        window.navigator.geolocation.getCurrentPosition(locationSucesso, locaionErro);

        async function locationSucesso(dados) {

          var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };

          try {
            let respostaApi = await fetch(`https://weather.contrateumdev.com.br/api/weather?lat=${dados.coords.latitude}&lon=${dados.coords.longitude}`, requestOptions);
            respostaApi = await respostaApi.json();

            if (respostaApi.cod === "404") {
              await setMsg({
                icon: <><i class="bi bi-x-circle-fill fs-1"></i></>,
                titulo: "Erro",
                msg: "Cidade não encontrada,verifique novamente",
                btn: <><button className="btn btn-secondary" onClick={() => { window.location.reload() }}>Tentar novamente!</button></>
              })
              await setCarregando(false);
            } else {
              respostaApi.horas = await buscaHorariosLocal(respostaApi.coord.lat, respostaApi.coord.lon);
              await setPesquisando(false)
              await setDadosCidade(respostaApi);
              await setCarregando(false);
            }

          } catch (error) {
            await setMsg({
              icon: <><i class="bi bi-x-circle-fill fs-1"></i></>,
              titulo: "Erro",
              msg: "Erro inesperado, tente novamente mais tarde",
              btn: <><button className="btn btn-secondary" onClick={() => { window.location.reload() }}>Tentar novamente!</button></>
            })
            await setCarregando(false);
          }
        }

        async function locaionErro(erro) {
          await setPesquisando(true);
          await setCarregando(false);
        }
      }

    })()
  }, [])

  async function onSubmitCidade(e) {
    // capturando dados do formulário
    e.preventDefault();
    let dadosFormJson = {};
    let dadosForm = new FormData(e.target);
    dadosForm.forEach((valor, chave) => {
      dadosFormJson[chave] = valor;
    });
    // fim da capturação de dados do formulário

    await setCarregando(true)

    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    try {
      let respostaApi = await fetch(`https://weather.contrateumdev.com.br/api/weather/city/?city=${dadosFormJson.city}`, requestOptions);
      respostaApi = await respostaApi.json();

      if (respostaApi.cod === "404") {
        await setMsg({
          icon: <><i class="bi bi-x-circle-fill fs-1"></i></>,
          titulo: "Erro",
          msg: "Cidade não encontrada,verifique novamente",
          btn: <><button className="btn btn-secondary" onClick={() => { window.location.reload() }}>Tentar novamente!</button></>
        })
        await setCarregando(false);
      } else {
        respostaApi.horas = await buscaHorariosLocal(respostaApi.coord.lat, respostaApi.coord.lon);
        await setPesquisando(false)
        await setDadosCidade(respostaApi);
        await setCarregando(false);
      }

    } catch (error) {
      await setMsg({
        icon: <><i class="bi bi-x-circle-fill fs-1"></i></>,
        titulo: "Erro",
        msg: "Erro inesperado, tente novamente mais tarde",
        btn: <><button className="btn btn-secondary" onClick={() => { window.location.reload() }}>Tentar novamente!</button></>
      })
      await setCarregando(false);
    }

  }

  async function buscaHorariosLocal(latitude, longitude) {
    return new Promise(async (sucesso, erro)=>{
      var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
  
      try {
        let respostaApi = await fetch(`https://clima-cors-anywhere.herokuapp.com/http://api.geonames.org/timezoneJSON?lat=${latitude}&lng=${longitude}&username=giuliaamaral`, requestOptions);
        respostaApi = await respostaApi.json();
        let data = new Date(respostaApi.time);
        let hora = data.getHours();
      

        if (hora >= 5 && hora <= 11) {
          respostaApi.periodo = "manha";
        }
        if(hora >= 12 && hora <= 17){
          respostaApi.periodo = "tarde";
        } 
        if(hora >= 18 && hora <= 23){
          respostaApi.periodo = "noite";
        } 
        if(hora >= 0 && hora <= 4){
          respostaApi.periodo = "madrugada";
        } 

        await sucesso(respostaApi);
      } catch (error) {
        await setMsg({
          icon: <><i class="bi bi-x-circle-fill fs-1"></i></>,
          titulo: "Erro",
          msg: "Erro inesperado, tente novamente mais tarde",
          btn: <><button className="btn btn-secondary" onClick={() => { window.location.reload() }}>Tentar novamente!</button></>
        })
        await setCarregando(false);
        await erro(error);
      }
  
    })
  }


  return (<>
    {
      carregando ? (<>
        <Carregando></Carregando>
      </>) : (<>
        {
          msg !== null ? (<>
            <Msg msg={msg}></Msg>
          </>) : (<>
            {
              pesquisando === false ? (<>
                <div className={`Incio fundoNuvem ${dadosCidade?.horas?.periodo}`}>
                  <div className="conteudoNasNuvens">

                    <nav className="navbar navbar-light bg-light d-block shadow bg-body" onClick={() => { setPesquisando(true) }}>
                      <button type="button" className="router float-start ms-2 text-dark btn btn-link p-0"><i className="bi bi-plus-lg fs-1"></i></button>
                      <p className="fs-5 text-center mt-2 mb-2">{dadosCidade?.name || "Escolha a cidade"} - {dadosCidade?.sys?.country}</p>
                    </nav>

                    <section className="text-center text-light m-5 p-5">

                      {
                        dadosCidade?.weather?.[0]?.icon && (<img alt="icone" src={`https://openweathermap.org/img/wn/${dadosCidade?.weather?.[0]?.icon}@2x.png`}></img>)
                      }

                      <h1 className="display-1 fw-bold">{dadosCidade?.main?.temp}°C</h1>
                      <h3>{dadosCidade?.weather?.[0]?.description}</h3>
                      <p>Sensação térmica: {dadosCidade?.main?.feels_like}°C</p>

                    </section>

                    <section>

                      <div className="container text-center">
                        <div className="row d-flex justify-content-center">

                          <div className="col-4 mb-3">
                            <div className="card shadow bg-body rounded">
                              <div className="card-body">
                                <h5 className="card-title">{dadosCidade?.main?.temp_min}°C</h5>
                                <p className="card-text">Mínima</p>
                              </div>
                            </div>
                          </div>

                          <div className="col-4 mb-3">
                            <div className="card shadow bg-body rounded">
                              <div className="card-body">
                                <h5 className="card-title">{dadosCidade?.main?.temp_max}°C</h5>
                                <p className="card-text">Máxima</p>
                              </div>
                            </div>
                          </div>

                          <div className="col-4 mb-3">
                            <div className="card shadow bg-body rounded">
                              <div className="card-body">
                                <h5 className="card-title">{dadosCidade?.main?.humidity}%</h5>
                                <p className="card-text">Úmidade</p>
                              </div>
                            </div>
                          </div>

                          <div className="col-6 mb-3">
                            <div className="card shadow bg-body rounded">
                              <div className="card-body">
                                <h5 className="card-title">{dadosCidade?.main?.pressure}<span className="fs-6">mba</span></h5>
                                <p className="card-text">Pressão</p>
                              </div>
                            </div>
                          </div>

                          <div className="col-6 mb-3">
                            <div className="card shadow bg-body rounded">
                              <div className="card-body">
                                <h5 className="card-title">{dadosCidade?.wind?.speed}<span className="fs-6">km/h</span></h5>
                                <p className="card-text">Vel. Vento</p>
                              </div>
                            </div>
                          </div>


                        </div>
                      </div>

                    </section>

                  </div>
                </div>

              </>) : (<>

                <div className="Pesquisa">

                  <nav className="navbar navbar-light bg-light d-block shadow bg-body">
                    <form onSubmit={onSubmitCidade}>
                      <input class="form-control d-inline-block ms-3 mb-1" name="city" type="text" placeholder="Escreva aqui o nome de uma cidade" style={{ width: "85%" }} autoFocus required />
                      <button type="submit" className="router float-end me-2 text-dark btn btn-link p-0"><i className="bi bi-check-lg fs-1"></i></button>
                    </form>
                  </nav>


                </div>
              </>)
            }
          </>)
        }


      </>

      )
    }

  </>);
}
