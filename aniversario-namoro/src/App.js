import React, { useState, useEffect } from 'react';
import './App.css';
import { Carousel, Button } from 'react-bootstrap';
import Historia from './Historia';
import Contador from './Contador';
import { intervalToDuration } from 'date-fns'; 


function App() {
  const [dataInicio, setDataInicio] = useState(new Date('2021-04-27')); // Data de início do namoro
  const [diasTotais, setDiasTotais] = useState(0);
  const [mensagem, setMensagem] = useState('');
  const [tempo, setTempo] = useState({
    anos: 0,
    meses: 0,
    dias: 0,
    horas: 0,
    minutos: 0,
    segundos: 0,
  });

  useEffect(() => {
    const intervalo = setInterval(() => {
      const agora = new Date();

      // Contador de dias totais desde o início do namoro
      const total = Math.floor((agora - dataInicio) / (1000 * 60 * 60 * 24));
      setDiasTotais(total);

      // Cronômetro principal
      const duracao = intervalToDuration({ start: dataInicio, end: agora });

      setTempo({
        anos: duracao.years,
        meses: duracao.months,
        dias: duracao.days,
        horas: agora.getHours(),
        minutos: agora.getMinutes(),
        segundos: agora.getSeconds(),
      });

      // Exibe mensagem especial no aniversário
      if (agora.getDate() === dataInicio.getDate() && agora.getMonth() === dataInicio.getMonth()) {
        setMensagem('Feliz aniversário de namoro! Que nosso amor cresça cada dia mais!');
      }
    }, 1000);

    return () => clearInterval(intervalo);
  }, [dataInicio]);


  const imagens = Array.from({ length: 35 }, (_, i) => `/imagens/imagem${i + 1}.jpg`);


  return (
    <div className="App">
      <header className="App-header">
        <h1 className="titulo">
          <span role="img" aria-label="heart">❤️</span> Mateus e Maria Eduarda{' '}
          <span role="img" aria-label="heart">❤️</span>
        </h1>
        <p className="subtitulo">Nosso Amor daqui ao resto da vida</p>
      </header>
    <div className="carrossel">
      <Carousel interval={3000}>
        {imagens.map((src, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-75 carrossel-imagem"
              src={src}
              alt={`Imagem ${index + 1}`}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>

      <Historia />

      <div className="contador">
        <Contador tempo={tempo} mensagem={mensagem} />
      </div>

      <div className="dias-totais">
        <p className="dias-texto">Total de dias desde o início do namoro: {diasTotais} dias</p>
      </div>
    </div>
  );
}

export default App;
