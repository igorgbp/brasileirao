import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { getCampeonato } from "./services/api";

function App() {
  const [brasileirao, setbrasileirao] = useState([]);

  async function fetchData() {
    const response = await getCampeonato("tabela");
    console.log(response);
    setbrasileirao(response);
  }
  useEffect(() => {
    if (brasileirao?.length === 0) {
      fetchData();
    }
  }, [brasileirao]);

  return (
    <div className="App mt-32">
      <header>
        <p>BRASILEIRAO 2023</p>
        <div className="row ">
          <label>TABELA DE CLASSIFICAÇÃO</label>
        </div>
      </header>

      {brasileirao.length === 0 ? (
        <div className="loading">Carregando...</div>
      ) : (
        <>
          <table border={1}>
            <thead>
              <tr>
                <th />
                <th />
                <th className="txtLeft">Clube</th>
                <th>Pts</th>
                <th>Partidas</th>
                <th>Vitorias</th>
                <th>Empates</th>
                <th>Derrotas</th>
                <th>GM</th>
                <th>GC</th>
                <th>SG</th>
              </tr>
            </thead>
            <tbody>
              {brasileirao.map((time, index)=>(
                <tr>
                  <td>
                    <img src={time.time.escudo} alt={time.nome} width={30} height={30}/>
                  </td>
                  <td>{time.posicao}</td>
                  <td>{time.time.nome_popular}</td>
                  <td>{time.pontos}</td>
                  <td>{time.jogos}</td>
                  <td>{time.vitorias}</td>
                  <td>{time.empates}</td>
                  <td>{time.derrotas}</td>
                  <td>{time.gols_pro}</td>
                  <td>{time.gols_contra}</td>
                  <td>{time.aproveitamento}%</td>

                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}

export default App;
