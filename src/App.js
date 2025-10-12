import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Ícones de redes sociais atualizados
import { FaInstagram, FaTiktok } from 'react-icons/fa';

import PrimeiraIMG from './img/primeira-imagem.png';
import SegundaImg from './img/segunda-img.png';
import TerceiraImg from './img/terceira-img.png';

// ===== LOGO ATUALIZADA PARA O MODELO DO PROTÓTIPO =====
const Logo = ({ isAnimated }) => (
<svg className="logo-svg" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  {/* Grupo de formas geométricas (losangos) */}
  <g 
    className={isAnimated ? "logo-rotating-group" : ""}
    fill="none" 
    stroke="currentColor"
    strokeWidth="1.5" /* Linhas mais finas como no protótipo */
  >
    {/* Todos os quadrados são rotacionados em 45° para virarem losangos */}
    <rect x="30" y="40" width="150" height="150"  transform="rotate(45 100 100)" />
    <rect x="20" y="30" width="170" height="170" transform="rotate(45 100 100)" />
    <rect x="0" y="25" width="180" height="180" transform="rotate( 100 100)" />
   {/* <rect x="63" y="63" width="74" height="74" transform="rotate(45 100 100)" />*/}
  </g>
  
  {/* Grupo das letras C e A com posicionamento ajustado */}
  <g className="logo-letters-group">
    <text className="logo-letter-c" x="75" y="140" fontSize="70">C</text>
    <text className="logo-letter-a" x="117" y="150" fontSize="70">A</text>
  </g>
</svg>
);

const LogoFooter = ({ isAnimated }) => (
<svg className="logo-svg" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  {/* Grupo de formas geométricas (losangos) */}
  <g 
    className={isAnimated ? "logo-rotating-group" : ""}
    fill="none" 
    stroke="currentColor"
    strokeWidth="1.5" /* Linhas mais finas como no protótipo */
  >
    {/* Todos os quadrados são rotacionados em 45° para virarem losangos */}
    <rect x="30" y="40" width="150" height="150"  transform="rotate(45 100 100)" />
    <rect x="20" y="30" width="170" height="170" transform="rotate(45 100 100)" />
    <rect x="0" y="25" width="180" height="180" transform="rotate( 100 100)" />
   {/* <rect x="63" y="63" width="74" height="74" transform="rotate(45 100 100)" />*/}
  </g>
  
  {/* Grupo das letras C e A com posicionamento ajustado */}
  <g className="logo-letters-group">
    <text className="logo-letter-c" x="75" y="140" fontSize="70">C</text>
    <text className="logo-letter-a" x="117" y="150" fontSize="70">A</text>
  </g>
</svg>
);


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
      <header className="navbar navbar-expand-lg sticky-top">
        <div className="container">
          <a className="navbar-brand" href="#home">
            <div className="logo-wrapper-nav">
              <Logo isAnimated={false} />
            </div>
            <div className="navbar-text-container">
              <span className="brand-title">CARVALHO - ADVOCACIA</span>
              <span className="brand-subtitle">ELIEZER DE SOUZA CARVALHO - OAB/ES 22.852</span>
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
        {/* O restante do seu código <main> continua aqui... */}
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

        <section className="areas-section" id="areas" style={{ backgroundImage: `url(${TerceiraImg})` }}>
            <div className="container">
                <div className="row align-items-center">
                <div className="col-lg-4">
                    <h2 className="areas-title-no-overlay">ÁREAS DE ATUAÇÃO</h2>
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
                    <div className="area-card white-card">
                        <h5>Direito à Saúde <small>(com atenção especial ao autismo)</small></h5>
                        <p>"Pessoas com autismo e suas famílias têm direitos assegurados por lei, incluindo acesso a tratamentos, medicamentos e terapias adequadas. Trabalhamos para garantir que esses direitos sejam respeitados, cobrando do Estado e dos planos de saúde o que é devido."</p>
                    </div>
                    <div className="area-card white-card other-areas-card">
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
      </main>

      <footer className="footer-section" id="contato">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-12 footer-col-logo">
              <div className="logo-wrapper-footer">
                <LogoFooter isAnimated={true} />
              </div>
              <p className="footer-brand-name">CARVALHO - ADVOCACIA</p>
            </div>

            <div className="col-lg-4 col-md-6">
              <h5 className="footer-title">Contato</h5>
              <p className="footer-text">
                Avenida Antônio Pinto de Aguiar,<br/>
                nº 310 – Vitória – ES
              </p>
              <p className="footer-text">(27) 92000-9296</p>
              <p className="footer-text">advocaciasouzacarvalho01@gmail.com</p>
            </div>
            
            <div className="col-lg-4 col-md-6">
              <h5 className="footer-title">Horário de Expediente</h5>
              <p className="footer-text">
                Segunda a Sexta-feira<br/>
                9h00 as 18h00
              </p>
              <p className="footer-text">
                Sábado<br/>
                9h00 as 12h00
              </p>
            </div>
          </div>
          
          <div className="row">
            <div className="col-12">
              <div className="social-media-section">
                <h6 className="social-media-title">Seguia-nos nas Redes Sociais</h6>
                <div className="social-icons-wrapper">
                  <a href="https://www.instagram.com/escarvalho_advocacia/" target="_blank" rel="noopener noreferrer" className="social-icon-link">
                    <FaInstagram />
                  </a>
                  <a href="https://www.tiktok.com/carvalho.advocaciaes" target="_blank" rel="noopener noreferrer" className="social-icon-link">
                    <FaTiktok />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;