document.addEventListener("DOMContentLoaded", () => {
  const hoje = new Date().toISOString().split("T")[0];
  const mensagemAlerta = document.getElementById("mensagemAlerta");

  document.getElementById("loginForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const nomeDigitado = document.getElementById("nome").value.trim();
    const turmaDigitada = document.getElementById("turma").value.trim();

    if (!nomeDigitado || !turmaDigitada) {
      if (mensagemAlerta) {
        mensagemAlerta.textContent = "Por favor, preencha todos os campos.";
        setTimeout(() => mensagemAlerta.textContent = "", 5000);
      }
      return;
    }

    const chave = `${nomeDigitado}_${turmaDigitada}_${hoje}`;
    const jaJogou = localStorage.getItem(chave);

    if (jaJogou) {
      if (mensagemAlerta) {
        mensagemAlerta.textContent = "⚠️ Você já participou hoje!";
        setTimeout(() => mensagemAlerta.textContent = "", 5000);
      }
      return;
    }

    // Salva os dados e redireciona só se não jogou ainda
    localStorage.setItem("nomeAluno", nomeDigitado);
    localStorage.setItem("turmaAluno", turmaDigitada);

    window.location.href = "raspadinha.html";
  });
});
