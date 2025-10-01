// App.jsx (Código completo e corrigido)
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { FaInstagram, FaFacebook } from 'react-icons/fa';

// A importação do logo de imagem foi removida pois não é mais necessária.
// import Logo from './img/sua-logo.png'; 
import PrimeiraIMG from './img/primeira-imagem.png';
import LadyJusticeImg from './img/advogado.png';
import AreasBgImg from './img/reuniao-escritorio.png';
import SegundaImg from './img/segunda-img.png'

function App() {
  React.useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector('.navbar');
      if (window.scrollY > 20) {
        nav.classList.add('nav-scrolled');
      } else {
        nav.classList.remove('nav-scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll);
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app">
      {/* SEÇÃO 1: HEADER (CABEÇALHO) - Conforme imagem 14d472.png */}
      <header className="navbar navbar-expand-lg sticky-top">
        <div className="container">
          <a className="navbar-brand" href="#home">
            
            {/* CÓDIGO DO LOGO ATUALIZADO AQUI */}
            <div className="navbar-logo-css">
              <span className="logo-text-c">C</span>
              <span className="logo-text-a">A</span>
            </div>

            <div className="navbar-text">
              <span className="title">CARVALHO - ADVOCACIA</span>
              <span className="subtitle">ELIEZER DE SOUZA CARVALHO - OAB/ES 22.852</span>
            </div>
          </a>
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
      </header>

      <main>
        {/* SEÇÃO 2: HERO (INÍCIO) - Conforme imagem 14d472.png */}
        <section className="hero-section" id="home" style={{ backgroundImage: `url(${PrimeiraIMG})` }}>
          <div className="hero-overlay">
            <div className="container">
              <div className="row">
                <div className="col-lg-7">
                  <h1 className="hero-title">Consultoria Jurídica de Excelência</h1>
                  <p className="hero-subtitle">
                    Oferecemos atendimento jurídico direto e especializado para que você possa resolver seus problemas de forma rápida e amigável.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- INÍCIO DA ORDEM SOLICITADA --- */}

        {/* SEÇÃO 3: "SABEMOS QUE O DIREITO É DIFÍCIL" - Conforme imagem 14d4ae.png */}
        <section className="cta-section" id="sabemos">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-7">
                        <h2 className="section-title serif-font">Sabemos que o direito é difícil!!!</h2>
                        <p className="cta-subtitle">Mas, "justiça não precisa ser complicada."</p>
                        <p className="text-content">
                            Há mais de 10 anos, trabalhamos para que cada cliente entenda seus direitos e consiga exercê-los com clareza e confiança. Nosso papel é simplificar o que parece difícil, oferecer apoio em cada etapa e lutar para que nossos clientes alcance os seus direitos.
                        </p>
                        <a href="#contato" className="btn btn-cta">ENTRE EM CONTATO</a>
                    </div>
                    <div className="col-lg-5 text-center">
                        <img src={SegundaImg} alt="Estátua da Justiça" className="cta-image"/>
                    </div>
                </div>
            </div>
        </section>

        {/* SEÇÃO 4: ÁREAS DE ATUAÇÃO - Conforme imagem 14d4e7.jpg */}
        <section className="areas-section" id="areas" style={{ backgroundImage: `url(${AreasBgImg})` }}>
           <div className="areas-overlay">
             <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4">
                        <h2 className="areas-title">ÁREAS DE ATUAÇÃO</h2>
                    </div>
                    <div className="col-lg-8">
                        <div className="areas-cards-container">
                            <div className="area-card dark-card">
                                <h5>Ações de Alimentos</h5>
                                <p>Buscamos no diálogo e na mediação a celeridade nas ações que envolvam alimentos, sempre resguardando o direito de nossos clientes.</p>
                            </div>
                             <div className="area-card dark-card">
                                <h5>Divórcios</h5>
                                <p>"A separação é um momento delicado, mas o divórcio pode ser conduzido de forma respeitosa e amigável. Atuamos para mediar os conflitos e assegurar que os direitos de cada parte sejam preservados."</p>
                            </div>
                            <div className="area-card light-card">
                                <h5>Direito à Saúde <small>(com atenção especial ao autismo)</small></h5>
                                <p>"Pessoas com autismo e suas famílias têm direitos assegurados por lei, incluindo acesso a tratamentos, medicamentos e terapias adequadas. Trabalhamos para garantir que esses direitos sejam respeitados, cobrando do Estado e dos planos de saúde o que é devido."</p>
                            </div>
                        </div>
                        <div className="other-areas">
                            <h5>Atuamos também nas áreas:</h5>
                            <div className="row">
                                <div className="col-md-6">
                                    <strong>Direito Previdenciário</strong>
                                    <ul>
                                        <li>Aposentadorias</li>
                                        <li>Benefícios em geral</li>
                                    </ul>
                                </div>
                                <div className="col-md-6">
                                    <strong>Direito Tributário</strong>
                                    <ul>
                                        <li>Restituição de Impostos</li>
                                        <li>(Monofásicos - ICMS ST - etc).</li>
                                        <li>Defesa em execução fiscal</li>
                                        <li>Planejamento Tributário</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
           </div>
        </section>
        
        {/* SEÇÃO 5: DEPOIMENTOS - Conforme imagem 14d7d6.png */}
        <section className="testimonials-section" id="depoimentos">
            <div className="container">
                <h2 className="section-title text-center">Depoimento de Clientes</h2>
                <p className="section-subtitle text-center">Uma visão honesta de como trabalhamos</p>
                <div className="row mt-5">
                    <div className="col-md-4 mb-4">
                        <div className="testimonial-card">
                            <span className="quote-icon">”</span>
                            <p>O Dr. Eliezer Carvalho foi além das minhas expectativas. Sempre muito atencioso, transmitiu confiança em cada etapa e conduziu tudo com firmeza, mas de um jeito leve, que deixou o processo muito mais tranquilo. No fim, conseguimos chegar a um resultado justo e respeitoso.</p>
                            <div className="author">- Maria Aparecida</div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="testimonial-card">
                            <span className="quote-icon">”</span>
                            <p>O Dr. Eliezer Carvalho uniu competência e humanidade, sempre com ética e firmeza. Transmitiu confiança e conduziu tudo de forma leve, ajudando a chegar a acordos justos e respeitosos.</p>
                            <div className="author">- Samira Sabino</div>
                        </div>
                    </div>
                     <div className="col-md-4 mb-4">
                        <div className="testimonial-card">
                            <span className="quote-icon">”</span>
                            <p>O Dr. Eliezer me atendeu com muita atenção, transmitindo confiança e domínio jurídico. Atuou em dois processos meus e, em ambos, conquistamos resultados positivos, alcançando exatamente o que eu buscava.</p>
                            <div className="author">- José Alves -</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* SEÇÃO 6: SOBRE NÓS, MISSÃO E VALORES - Conforme imagem 14d7af.png */}
        <section className="about-section" id="sobre">
          <div className="container">
            <h2 className="section-title">Sobre nós, missão e valores</h2>
            <p className="text-content">
              Na Carvalho Advocacia, acreditamos que a advocacia deve ser guiada por princípios sólidos. O Dr. Eliezer de Souza Carvalho conduz seu trabalho com ética, competência e transparência, sempre construindo relações de confiança com clientes e sociedade.
            </p>
            <p className="text-content">
              Nossos pilares são claros: confidencialidade, independência, imparcialidade, honestidade, lealdade, competência, respeito e transparência. Esses valores não ficam só no discurso — são a base do nosso trabalho no dia a dia.
            </p>
            <h3 className="subsection-title">Missão</h3>
            <p className="text-content">
              Garantir que cada cliente seja atendido com atenção, clareza e dedicação. Nosso objetivo é transformar questões jurídicas em soluções práticas, sempre buscando justiça com responsabilidade e humanidade.
            </p>
            <h3 className="subsection-title">Valores</h3>
            <ul className="values-list">
              <li><strong>Ética:</strong> agir com retidão em todas as situações.</li>
              <li><strong>Transparência:</strong> manter a comunicação clara e honesta.</li>
              <li><strong>Respeito:</strong> tratar cada cliente e cada causa com dignidade.</li>
              <li><strong>Confiança:</strong> construir relações sólidas baseadas na verdade.</li>
              <li><strong>Dedicação:</strong> atuar com empenho para alcançar os melhores resultados.</li>
            </ul>
          </div>
        </section>

      </main>

      {/* SEÇÃO FINAL: FOOTER E CONTATO - Conforme imagem 14d80e.png */}
      <footer className="footer-section" id="contato">
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-12 text-center text-lg-start mb-4 mb-lg-0">
                    {/* Aqui você pode usar o logo em CSS novamente ou uma imagem, se preferir */}
                    <div className="navbar-logo-css" style={{margin: '0 auto 15px auto'}}>
                        <span className="logo-text-c">C</span>
                        <span className="logo-text-a">A</span>
                    </div>
                    <p className="footer-brand-name">CARVALHO - ADVOCACIA</p>
                </div>
                <div className="col-lg-5 col-md-6 mb-4 mb-md-0">
                    <h5>Contato</h5>
                    <p>
                        Avenida Antônio Pinto de Aguiar,<br/>
                        nº 310 - Vitória – ES
                    </p>
                    <p>(27) 92000-9296</p>
                    <p>advocaciasouzacarvalho0[at]gmail.com</p>
                </div>
                <div className="col-lg-4 col-md-6">
                    <h5>Horário de Expediente</h5>
                    <p>Segunda a Sexta-feira<br/>9h00 as 18h00</p>
                    <p>Sábado<br/>9h00 as 12h00</p>
                </div>
            </div>
            <div className="social-media-section">
                <h6>Seguia-nos nas Redes Sociais</h6>
                <div className="social-icons">
                    <a href="#" aria-label="Facebook"><FaFacebook /></a>
                    <a href="#" aria-label="Instagram"><FaInstagram /></a>
                </div>
            </div>
        </div>
      </footer>
    </div>
  );
}

export default App;