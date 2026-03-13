const projetos = [
  {
    nome: "Formédica Entregas",
    descricao: "Sistema de entregas desenvolvido com a IA do Claude.",
    tecnologias: ["HTML5", "CSS", "JavaScript"],
  },
  {
    nome: "Portfólio Pessoal",
    descricao: "Este próprio portfólio! Desenvolvido do zero com HTML, CSS e JavaScript.",
    tecnologias: ["React", "Vite"],
  },

  {
    nome: "Portfólio Pessoal",
    descricao: "Este próprio portfólio! Desenvolvido do zero com HTML, CSS e JavaScript.",
    tecnologias: ["React", "Vite"],
  }
]

function criarProjetos() {

  const grid = document.getElementById("projetos-grid");


  projetos.forEach(function(projeto, indice) {

    const card = document.createElement("div");
    card.classList.add("card-projeto");
    card.style.transitionDelay = (indice * 0.1) + "s"; 

    const techsHTML = projeto.tecnologias
      .map(function(tech) {
        return `<span class="tag-tech">${tech}</span>`;
      })
      .join("");

  
    card.innerHTML = `
      <div class="projeto-header">
        <h3 class="projeto-nome">${projeto.nome}</h3>
      </div>
      <p class="projeto-desc">${projeto.descricao}</p>
      <div class="projeto-techs">${techsHTML}</div>
    `;


    grid.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", function() {
  criarProjetos();
});
