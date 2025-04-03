import React, { useState, useEffect } from 'react';
import { intervalToDuration } from 'date-fns';
import './Contador.css';

function Contador({ mensagem }) {
  const [tempo, setTempo] = useState({
    anos: 0,
    meses: 0,
    dias: 0,
    horas: 0,
    minutos: 0,
    segundos: 0,
  });

  const [showHearts, setShowHearts] = useState(false);
  const [explosoes, setExplosoes] = useState([]);

  useEffect(() => {
    const dataInicio = new Date('2021-04-27T00:00:00');

    const intervalo = setInterval(() => {
      const agora = new Date();
      const duracao = intervalToDuration({ start: dataInicio, end: agora });

      setTempo({
        anos: duracao.years,
        meses: duracao.months,
        dias: duracao.days,
        horas: agora.getHours(),
        minutos: agora.getMinutes(),
        segundos: agora.getSeconds(),
      });

      if (agora.getDate() === 27 && agora.getMonth() === 3) {
        setShowHearts(true);
      }
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  const soltarCoracoes = () => {
    const novaExplosao = {
      id: Date.now(),
      top: Math.random() * 80 + 10,
      left: Math.random() * 80 + 10,
    };
    setExplosoes((prev) => [...prev, novaExplosao]);

    setTimeout(() => {
      setExplosoes((prev) => prev.filter((e) => e.id !== novaExplosao.id));
    }, 1500);
  };

  return (
    <>
      {showHearts && <div className="heart-rain"></div>}

      {explosoes.map((e) => (
        <div
          key={e.id}
          className="explosao-coracoes"
          style={{ top: `${e.top}%`, left: `${e.left}%` }}
        >
          <span>❤️</span>
          <span>❤️</span>
          <span>❤️</span>
        </div>
      ))}

      <div className="contador-item">
        <div className="contador-titulo">ANOS</div>
        <div className="contador-valor">{tempo.anos}</div>
      </div>
      <div className="contador-item">
        <div className="contador-titulo">MESES</div>
        <div className="contador-valor">{tempo.meses}</div>
      </div>
      <div className="contador-item">
        <div className="contador-titulo">DIAS</div>
        <div className="contador-valor">{tempo.dias}</div>
      </div>
      <div className="contador-item">
        <div className="contador-titulo">HORAS</div>
        <div className="contador-valor">{tempo.horas}</div>
      </div>
      <div className="contador-item">
        <div className="contador-titulo">MINUTOS</div>
        <div className="contador-valor">{tempo.minutos}</div>
      </div>
      <div className="contador-item">
        <div className="contador-titulo">SEGUNDOS</div>
        <div className="contador-valor">{tempo.segundos}</div>
      </div>

      {mensagem && <div className="contador-mensagem">{mensagem}</div>}

<button className="botao-explosao" onClick={soltarCoracoes}>
  Amor ❤️
</button>
    </>
  );
}

export default Contador;
