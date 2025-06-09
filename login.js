document.addEventListener("DOMContentLoaded", () => {
  const nome = localStorage.getItem("nomeAluno");
  const turma = localStorage.getItem("turmaAluno");

  if (nome && turma) {
    window.location.href = "raspadinha.html";
  }

  document.getElementById("loginForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const nome = document.getElementById("nome").value.trim();
    const turma = document.getElementById("turma").value.trim();

    if (nome && turma) {
      localStorage.setItem("nomeAluno", nome);
      localStorage.setItem("turmaAluno", turma);
      window.location.href = "raspadinha.html";
    } else {
      alert("Por favor, preencha todos os campos.");
    }
  });
});
