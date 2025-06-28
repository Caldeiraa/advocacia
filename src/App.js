import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { FaGavel, FaFileInvoiceDollar, FaUsersCog } from 'react-icons/fa';

import imgAdvogado from './img/advogado.png';
import imgMaos from './img/aperto-de-maos.png';
import imgReuniao from './img/reuniao-escritorio.png';
import Logo from './img/sua-logo.png'

function App() {
  return (
    <div className="app">
      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg custom-navbar sticky-top">
        <div className="container d-flex align-items-center justify-content-between">
          <a className="navbar-brand d-flex align-items-center" href="#">
            <img src={Logo} alt="Logo SC" className="navbar-logo" />
            <div className="navbar-text">
              <span className="title">SOUZA CARVALHO</span>
              <span className="subtitle">ADVOCACIA</span>
            </div>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#home">Início</a>
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

      {/* Home */}
      <section className="hero" id="home">
        <div className="hero-overlay d-flex align-items-center">
          <div className="container py-5 text-white text-center text-lg-start d-flex flex-column flex-lg-row align-items-center justify-content-between">
            <div className="mb-4 mb-lg-0">
              <h1 className="display-5 fw-bold">Consultoria Jurídica de Excelência</h1>
              <p className="lead">Soluções personalizadas em Direito Civil, Previdenciário e Tributário.</p>
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
          <div className="col-lg-6 sobre-texto">
            <h2 className="mb-3">Sobre Nós</h2>
            <p>Na Souza Carvalho Advocacia, os princípios da advocacia são tratados como pilares essenciais que sustentam o exercício ético e responsável da profissão. Dr. Eliezer de Souza Carvalho, advogado, atua com firme compromisso com a integridade, a competência e a construção de uma relação justa e transparente com os clientes e a sociedade. Entre os valores que orientam nossa atuação estão a confidencialidade, a independência, a imparcialidade, a honestidade, a lealdade, a competência, o respeito e a transparência.</p>
            <a href="#contato" className="btn btn-dark mt-3 px-4 py-2">Fale com um especialista</a>
          </div>
        </div>
      </section>

      {/* ÁREAS DE ATUAÇÃO */}
      <section className="section bg-light" id="areas">
        <div className="container">
          <h2 className="text-center mb-5 text-uppercase text-dark fw-bold display-6">Áreas de Atuação</h2>
          <div className="row g-4 justify-content-center">
            <div className="col-md-4">
              <div className="card area-card-custom h-100 text-center p-4">
                <div className="icon-wrapper-custom mb-3">
                  <FaGavel size={36} color="#fff" />
                </div>
                <h5 className="card-title-custom mb-3">Direito Civil</h5>
                <ul className="list-unstyled lh-lg">
                  <li>• Divórcios</li>
                  <li>• Alimentos e Guarda</li>
                  <li>• Inventários</li>
                  <li>• Ações cíveis em geral</li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card area-card-custom h-100 text-center p-4">
                <div className="icon-wrapper-custom mb-3">
                  <FaFileInvoiceDollar size={36} color="#fff" />
                </div>
                <h5 className="card-title-custom mb-3">Direito Tributário</h5>
                <ul className="list-unstyled lh-lg">
                  <li>• Restituição de Impostos</li>
                  <li>• Defesa em Execuções Fiscais</li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card area-card-custom h-100 text-center p-4">
                <div className="icon-wrapper-custom mb-3">
                  <FaUsersCog size={36} color="#fff" />
                </div>
                <h5 className="card-title-custom mb-3">Direito Previdenciário</h5>
                <ul className="list-unstyled lh-lg">
                  <li>• Aposentadorias</li>
                  <li>• Benefícios para deficientes</li>
                  <li>• Trabalhadores rurais</li>
                  <li>• Revisões e recursos</li>
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
            <div className="map-responsive">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1322.8396988419447!2d-40.35661064689834!3d-20.31865015730908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb83c4eead510db%3A0x4fa333d0690f299d!2sAv.%20Ant%C3%B4nio%20Pinto%20de%20%C3%81guiar%2C%20330%20-%20M%C3%A1rio%20Cypreste%2C%20Vit%C3%B3ria%20-%20ES%2C%2029027-200%2C%20Brasil!5e0!3m2!1spt-BR!2sus!4v1749098851588!5m2!1spt-BR!2sus"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer text-white text-center py-4 mt-5">
        &copy; {new Date().getFullYear()} Souza Carvalho Advocacia. Todos os direitos reservados.
      </footer>
    </div>
  );
}

export default App;
