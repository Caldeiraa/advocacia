import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import ImagemFundoHero from './img/balanca.png';
import ImagemAdvogada from './img/advogado.png';
import ImagemApertoMaos from './img/aperto-de-maos.png';
import ImagemContratoLaptop from './img/contrato-laptop.png';
import ImagemReuniaoEscritorio from './img/reuniao-escritorio.png';

function App() {
  return (
    <div className="app">
      {/* NAVBAR FIXA COM UI/UX */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#">Souza Carvalho Advocacia</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#sobre">Sobre</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#areas">Áreas</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contato">Contato</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* SEÇÃO HERO */}
      <section className="hero-section">
        <div className="hero-overlay">
          <div className="hero-container">
            <div className="hero-content">
              <h1>CONSULTORIA JURÍDICA E SOLUÇÕES PERSONALIZADAS</h1>
              <p>
                Somos especializados em Direito Civil em toda sua abrangência,
                Direito Previdenciário e Direito Tributário.
              </p>
            </div>
            <div className="hero-image">
              <img src={ImagemAdvogada} alt="Advogado" />
            </div>
          </div>
        </div>
      </section>


      {/* SEÇÃO SOBRE */}
      <section className="sobre-section" id="sobre">
        <div className="sobre-left">
          <img src={ImagemApertoMaos} alt="Aperto de Mãos" loading="lazy" />
        </div>
        <div className="sobre-right">
          <div className="sobre-content">
            <h2>SOBRE NÓS</h2>
            <p>
              Na Souza Carvalho Advocacia, os princípios da advocacia são tratados como pilares essenciais que sustentam o exercício ético e responsável da profissão.
              Dr. Eliezer de Souza Carvalho, advogado, atua com firme compromisso com a integridade, a competência e a construção de uma relação justa e transparente com os clientes e a sociedade.
              Entre os valores que orientam nossa atuação estão a confidencialidade, a independência, a imparcialidade, a honestidade, a lealdade, a competência, o respeito e a transparência.
            </p>
            <button>MARQUE UMA CONSULTA</button>
          </div>
        </div>
      </section>

      {/* SEÇÃO ÁREAS */}
      <section className="areas-section" id="areas">
        <h2>NOSSAS ÁREAS DE ATUAÇÃO</h2>
        <div className="areas-container">
          <div className="areas-image">
            <img src={ImagemContratoLaptop} alt="Pessoa assinando contrato" loading="lazy" />
          </div>
          <div className="areas-organograma">
            <div className="areas-top">
              <div className="area-area">
                <div className="area-linha">CÍVEL</div>
                <div className="area-sub">
                  <div className="area-box">DIVÓRCIOS CONSENSUAIS E LITIGIOSOS</div>
                  <div className="area-box">AÇÕES DE ALIMENTOS E GUARDA DE MENORES</div>
                  <div className="area-box">INVENTÁRIOS E AFINS</div>
                  <div className="area-box">AÇÕES CÍVEIS EM GERAL</div>
                </div>
              </div>
              <div className="area-area">
                <div className="area-linha">TRIBUTÁRIO</div>
                <div className="area-sub">
                  <div className="area-box">RESTITUIÇÃO DE IMPOSTOS</div>
                  <div className="area-box">DEFESA EM EXECUÇÃO FISCAL</div>
                </div>
              </div>
            </div>
            <div className="area-area">
              <div className="area-linha">PREVIDENCIÁRIO</div>
              <div className="area-sub area-box">
                <strong>APOSENTADORIAS:</strong>
                <ul>
                  <li>POR TEMPO DE CONTRIBUIÇÃO</li>
                  <li>POR IDADE</li>
                  <li>ESPECIAL: ATIVIDADES CONSIDERADAS INSALUBRES, PERIGOSAS OU PENOSAS.</li>
                </ul>
                <div>INVALIDEZ</div>
                <div>PARA PROFESSORES</div>
                <div>PESSOAS COM DEFICIÊNCIA</div>
                <div>TRABALHADORES RURAIS</div>
                <div>BENEFÍCIOS PREVIDENCIÁRIOS</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO CONTATO */}
      <section className="contact-section" id="contato">
        <div className="contact-left">
          <h2>CONTATE-NOS</h2>
          <p><strong>Tel.:</strong> (27) 99829-7573</p>
          <p><strong>Emails:</strong><br />
            escarvalhoadvocacia@gmail.com<br />
            advocaciasouzacarvalho01@gmail.com
          </p>
          <p><strong>Endereço:</strong><br />
            Avenida Antônio Pinto de Aguiar, 310<br />
            Mário Cypreste - Vitória - ES
          </p>
          <button>AGENDE UMA CONSULTA</button>
        </div>
        <div className="contact-right">
          <img src={ImagemReuniaoEscritorio} alt="Reunião no Escritório" loading="lazy" />
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="footer">
        &copy; {new Date().getFullYear()} Souza Carvalho Advocacia. Todos os direitos reservados.
      </footer>
    </div>
  );
}

export default App;
