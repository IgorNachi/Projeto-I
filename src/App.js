import React from 'react';

function App() {
  return (
    <div className="App">
      <header>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Projeto de interface</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="../Index_2.html">Sobre nós</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="../Index_3.html">Nosso Trabalho</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="../Index_4.html">Nomes</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <p>
        Para mais informações, clique no botão a seguir:
        <button type="button" className="btn btn-outline-info" id="Bot" onClick={Mudar}>Informação</button>
      </p>
      <p id="P1">Mudar fonte
        <button type="button" className="btn btn-outline-success" id="Bot2" onClick={Alterar}>Alterar fonte</button>
      </p>
      <div id="carouselExample" className="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="academia1.PNG" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="academia3.png" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="academia2.jpg" className="d-block w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default App;
function Mudar(){
  const Botão = document.getElementById("Bot");
  window.location.href = "http://www.iesb.br";
}
function Alterar(){
  const Botão_2 = document.getElementById("Bot2")
  const P1 = document.getElementById("P1");
  P1.style.color = "red"
  P1.style.fontSize = "24px"
}