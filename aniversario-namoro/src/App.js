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

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="titulo">
          <span role="img" aria-label="heart">❤️</span> Mateus e Maria Eduarda{' '}
          <span role="img" aria-label="heart">❤️</span>
        </h1>
        <p className="subtitulo">Nosso Amor: Uma Historia à distancia</p>
      </header>

      <div className="carrossel">
  <Carousel interval={3000}>
    <Carousel.Item>
      <img className="d-block w-75 carrossel-imagem" src="/imagens/imagem1.jpg" alt="Imagem 1" />
    </Carousel.Item>
    <Carousel.Item>
      <img className="d-block w-75 carrossel-imagem" src="/imagens/imagem2.jpg" alt="Imagem 2" />
    </Carousel.Item>
    <Carousel.Item>
      <img className="d-block w-75 carrossel-imagem" src="/imagens/imagem3.jpg" alt="Imagem 3" />
    </Carousel.Item>
    <Carousel.Item>
      <img className="d-block w-75 carrossel-imagem" src="/imagens/imagem4.jpg" alt="Imagem 4" />
    </Carousel.Item>
    <Carousel.Item>
      <img className="d-block w-75 carrossel-imagem" src="/imagens/imagem5.jpg" alt="Imagem 5" />
    </Carousel.Item>
    <Carousel.Item>
      <img className="d-block w-75 carrossel-imagem" src="/imagens/imagem6.jpg" alt="Imagem 6" />
    </Carousel.Item>
    <Carousel.Item>
      <img className="d-block w-75 carrossel-imagem" src="/imagens/imagem7.jpg" alt="Imagem 7" />
    </Carousel.Item>
    <Carousel.Item>
      <img className="d-block w-75 carrossel-imagem" src="/imagens/imagem8.jpg" alt="Imagem 8" />
    </Carousel.Item>
    <Carousel.Item>
      <img className="d-block w-75 carrossel-imagem" src="/imagens/imagem9.jpg" alt="Imagem 9" />
    </Carousel.Item>
    <Carousel.Item>
      <img className="d-block w-75 carrossel-imagem" src="/imagens/imagem10.jpg" alt="Imagem 10" />
    </Carousel.Item>
    <Carousel.Item>
      <img className="d-block w-75 carrossel-imagem" src="/imagens/imagem11.jpg" alt="Imagem 11" />
    </Carousel.Item>
    <Carousel.Item>
      <img className="d-block w-75 carrossel-imagem" src="/imagens/imagem12.jpg" alt="Imagem 12" />
    </Carousel.Item>
    <Carousel.Item>
      <img className="d-block w-75 carrossel-imagem" src="/imagens/imagem13.jpg" alt="Imagem 13" />
    </Carousel.Item>
    <Carousel.Item>
      <img className="d-block w-75 carrossel-imagem" src="/imagens/imagem14.jpg" alt="Imagem 14" />
    </Carousel.Item>
    <Carousel.Item>
      <img className="d-block w-75 carrossel-imagem" src="/imagens/imagem15.jpg" alt="Imagem 15" />
    </Carousel.Item>
    <Carousel.Item>
      <img className="d-block w-75 carrossel-imagem" src="/imagens/imagem16.jpg" alt="Imagem 16" />
    </Carousel.Item>
    <Carousel.Item>
      <img className="d-block w-75 carrossel-imagem" src="/imagens/imagem17.jpg" alt="Imagem 17" />
    </Carousel.Item>
    <Carousel.Item>
      <img className="d-block w-75 carrossel-imagem" src="/imagens/imagem18.jpg" alt="Imagem 18" />
    </Carousel.Item>
    <Carousel.Item>
      <img className="d-block w-75 carrossel-imagem" src="/imagens/imagem19.jpg" alt="Imagem 19" />
    </Carousel.Item>
    <Carousel.Item>
      <img className="d-block w-75 carrossel-imagem" src="/imagens/imagem20.jpg" alt="Imagem 20" />
    </Carousel.Item>
    <Carousel.Item>
      <img className="d-block w-75 carrossel-imagem" src="/imagens/imagem21.jpg" alt="Imagem 21" />
    </Carousel.Item>
    <Carousel.Item>
      <img className="d-block w-75 carrossel-imagem" src="/imagens/imagem22.jpg" alt="Imagem 22" />
    </Carousel.Item>
    <Carousel.Item>
      <img className="d-block w-75 carrossel-imagem" src="/imagens/imagem23.jpg" alt="Imagem 23" />
    </Carousel.Item>
    <Carousel.Item>
      <img className="d-block w-75 carrossel-imagem" src="/imagens/imagem24.jpg" alt="Imagem 24" />
    </Carousel.Item>
    <Carousel.Item>
      <img className="d-block w-75 carrossel-imagem" src="/imagens/imagem25.jpg" alt="Imagem 25" />
    </Carousel.Item>
    <Carousel.Item>
      <img className="d-block w-75 carrossel-imagem" src="/imagens/imagem26.jpg" alt="Imagem 26" />
    </Carousel.Item>
    <Carousel.Item>
      <img className="d-block w-75 carrossel-imagem" src="/imagens/imagem27.jpg" alt="Imagem 27" />
    </Carousel.Item>
    <Carousel.Item>
      <img className="d-block w-75 carrossel-imagem" src="/imagens/imagem28.jpg" alt="Imagem 28" />
    </Carousel.Item>
    <Carousel.Item>
      <img className="d-block w-75 carrossel-imagem" src="/imagens/imagem29.jpg" alt="Imagem 29" />
    </Carousel.Item>
    <Carousel.Item>
      <img className="d-block w-75 carrossel-imagem" src="/imagens/imagem30.jpg" alt="Imagem 30" />
    </Carousel.Item>
    <Carousel.Item>
      <img className="d-block w-75 carrossel-imagem" src="/imagens/imagem31.jpg" alt="Imagem 31" />
    </Carousel.Item>
    <Carousel.Item>
      <img className="d-block w-75 carrossel-imagem" src="/imagens/imagem32.jpg" alt="Imagem 32" />
    </Carousel.Item>
    <Carousel.Item>
      <img className="d-block w-75 carrossel-imagem" src="/imagens/imagem33.jpg" alt="Imagem 33" />
    </Carousel.Item>
    <Carousel.Item>
      <img className="d-block w-75 carrossel-imagem" src="/imagens/imagem34.jpg" alt="Imagem 34" />
    </Carousel.Item>
    <Carousel.Item>
      <img className="d-block w-75 carrossel-imagem" src="/imagens/imagem35.jpg" alt="Imagem 35" />
    </Carousel.Item>
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
