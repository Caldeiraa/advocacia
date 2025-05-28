import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { FaGavel, FaFileInvoiceDollar, FaUsersCog } from 'react-icons/fa';

import imgAdvogado from './img/advogado.png';
import imgMaos from './img/aperto-de-maos.png';
import imgReuniao from './img/reuniao-escritorio.png';

function App() {
  return (
    <div className="app">
      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm sticky-top">
        <div className="container">
          <a className="navbar-brand fw-bold fs-4" href="#">Souza Carvalho Advocacia</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link" href="#home">Início</a></li>
              <li className="nav-item"><a className="nav-link" href="#sobre">Sobre</a></li>
              <li className="nav-item"><a className="nav-link" href="#areas">Áreas</a></li>
              <li className="nav-item"><a className="nav-link" href="#contato">Contato</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-overlay d-flex align-items-center">
          <div className="container py-5 text-white text-center text-lg-start d-flex flex-column flex-lg-row align-items-center justify-content-between">
            <div className="mb-4 mb-lg-0">
              <h1 className="display-5 fw-bold">Consultoria Jurídica de Excelência</h1>
              <p className="lead">Soluções personalizadas em Direito Civil, Previdenciário e Tributário.</p>
              <a href="#contato" className="btn btn-outline-light mt-3 px-4 py-2">Agende sua consulta</a>
            </div>
            <div>
              <img src={imgAdvogado} alt="Advogado" className="hero-img" />
            </div>
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section className="section bg-white" id="sobre">
        <div className="container d-flex flex-column flex-lg-row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <img src={imgMaos} alt="Confiança" className="img-fluid rounded shadow" />
          </div>
          <div className="col-lg-6">
            <h2 className="mb-3">Sobre Nós</h2>
            <p>Na Souza Carvalho Advocacia, os princípios da advocacia são tratados como pilares essenciais que sustentam o exercício ético e responsável da profissão. Dr. Eliezer de Souza Carvalho, advogado, atua com firme compromisso com a integridade, a competência e a construção de uma relação justa e transparente com os clientes e a sociedade. Entre os valores que orientam nossa atuação estão a confidencialidade, a independência, a imparcialidade, a honestidade, a lealdade, a competência, o respeito e a transparência.</p>
            <a href="#contato" className="btn btn-dark mt-3 px-4 py-2">Fale com um especialista</a>
          </div>
        </div>
      </section>

      {/* ÁREAS DE ATUAÇÃO */}
      <section className="section bg-light" id="areas">
        <div className="container">
          <h2 className="text-center mb-5">Áreas de Atuação</h2>
          <div className="row g-4 justify-content-center">
            <div className="col-md-4">
              <div className="card area-card h-100 shadow-sm p-4 text-center">
                <div className="icon-wrapper mb-3">
                  <FaGavel size={40} color="#2c3e50" />
                </div>
                <h5 className="card-title mb-3">Direito Civil</h5>
                <ul className="list-unstyled lh-lg">
                  <li>Divórcios</li>
                  <li>Alimentos e Guarda</li>
                  <li>Inventários</li>
                  <li>Ações cíveis em geral</li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card area-card h-100 shadow-sm p-4 text-center">
                <div className="icon-wrapper mb-3">
                  <FaFileInvoiceDollar size={40} color="#2c3e50" />
                </div>
                <h5 className="card-title mb-3">Direito Tributário</h5>
                <ul className="list-unstyled lh-lg">
                  <li>Restituição de Impostos</li>
                  <li>Defesa em Execuções Fiscais</li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card area-card h-100 shadow-sm p-4 text-center">
                <div className="icon-wrapper mb-3">
                  <FaUsersCog size={40} color="#2c3e50" />
                </div>
                <h5 className="card-title mb-3">Direito Previdenciário</h5>
                <ul className="list-unstyled lh-lg">
                  <li>Aposentadorias</li>
                  <li>Benefícios para deficientes</li>
                  <li>Trabalhadores rurais</li>
                  <li>Revisões e recursos</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section className="section bg-white" id="contato">
        <div className="container d-flex flex-column flex-lg-row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h2 className="mb-3">Entre em Contato</h2>
            <p><strong>Telefone:</strong> (27) 99829-7573</p>
            <p><strong>E-mail:</strong> escarvalhoadvocacia@gmail.com</p>
            <p><strong>Endereço:</strong><br />Avenida Antônio Pinto de Aguiar, 310<br />Mário Cypreste - Vitória/ES</p>
            <a href="https://wa.me/27998297573" className="btn btn-dark mt-3 px-4 py-2">Solicitar atendimento</a>
          </div>
          <div className="col-lg-6">
            <img src={imgReuniao} alt="Reunião no escritório" className="img-fluid rounded shadow" />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer bg-dark text-white text-center py-4 mt-5">
        &copy; {new Date().getFullYear()} Souza Carvalho Advocacia. Todos os direitos reservados.
      </footer>
    </div>
  );
}

export default App;
