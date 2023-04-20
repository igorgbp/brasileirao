import { useState, useEffect } from "react";
import { getCampeonato } from "./services/api";
import './App.css';

function App() {
  const [brasileirao, setBrasileirao] = useState([]);

  async function fetchData() {
    const response = await getCampeonato("tabela");
    setBrasileirao(response);
  }

  console.log(brasileirao);

  useEffect(() => {
    if (brasileirao?.length === 0) {
      fetchData();
    }
  }, [brasileirao]);

  return (
    <div className="App">
      <header>
        <h1>BRASILEIRÃO 2023</h1>
        <div className="row">
          <label>Tabela de Classificação</label>
        </div>
      </header>

      {brasileirao.length === 0 ? (
        <div className="loading">Carregando...</div>
      ) : (
        <>
          <table style={{marginTop:20}}>
            <thead>
              <tr>
                <th />
                <th />
                <th className="txtLeft">Clube</th>
                <th>Pts</th>
                <th>Partidas</th>
                <th>Vitórias</th>
                <th>Empates</th>
                <th>Derrotas</th>
                <th>GM</th>
                <th>GC</th>
                <th>SG</th>
                <th>AP (%)</th>
              </tr>
            </thead>
            <tbody>
              {brasileirao.map((time, index) => (
                
                <tr
                  key={index}
                  className={`${index % 2 === 0 ? "odd" : "even"}
                              ${index <4 && "libertadores"}
                              ${index >= 4 && index <=7 && "sula"}
                  `}
                >
                  <td>
                      <img src={time.time.escudo} alt={time.nome} width={30} height={30}></img>
                  </td>
                  <td>{time.posicao}</td>
                  <td className="txtLeft">{time.time.nome_popular}</td>
                  <td>{time.pontos}</td>
                  <td>{time.jogos}</td>
                  <td>{time.vitorias}</td>
                  <td>{time.empates}</td>
                  <td>{time.derrotas}</td>
                  <td>{time.gols_pro}</td>
                  <td>{time.gols_contra}</td>
                  <td>{time.saldo_gols}</td>
                  <td>{time.aproveitamento}</td>
                </tr>
              ))}
            </tbody>
          </table>
                <footer style={{fontFamily:'Segoe UI', fontSize: "12px", color:'#333'}}>
                  <ul style={{display:"flex", justifyContent:'center', listStyle:'none', gap:'20px'}}>
                    <li style={{display: 'flex', alignItems:'center', }}>
                      <span style={{backgroundColor:"#00b16a", width:'10px', height:'10px', borderRadius: '50%', display:'inline-block', marginRight: '5px' }}></span>
                      <span> Fase de grupos da libertadores</span>
                    </li>
                    <li style={{display: 'flex', alignItems:'center'}}>
                      <span style={{backgroundColor:"#2366e2", width:'10px', height:'10px', borderRadius: '50%', display:'inline-block', marginRight: '5px' }}></span>
                      <span> Sulamericana</span>
                    </li>
                  </ul>
                </footer>


        </>
      )}



    </div>
  );
}

export default App