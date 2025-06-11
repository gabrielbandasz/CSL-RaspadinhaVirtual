// Aguarda o carregamento completo do DOM antes de executar o script
document.addEventListener("DOMContentLoaded", () => {
  // Obtém a data atual no formato AAAA-MM-DD
  const hoje = new Date().toISOString().split("T")[0];

  // Referência ao elemento onde mensagens de alerta serão exibidas
  const mensagemAlerta = document.getElementById("mensagemAlerta");

  // Adiciona um ouvinte de evento ao formulário de login
  document.getElementById("loginForm").addEventListener("submit", (e) => {
    e.preventDefault(); // Impede o envio padrão do formulário

    // Obtém e remove espaços extras do nome e da turma digitados
    const nomeDigitado = document.getElementById("nome").value.trim();
    const turmaDigitada = document.getElementById("turma").value.trim();

    // Verifica se os campos foram preenchidos
    if (!nomeDigitado || !turmaDigitada) {
      // Se o alerta estiver disponível, exibe a mensagem de erro
      if (mensagemAlerta) {
        mensagemAlerta.textContent = "Por favor, preencha todos os campos.";
        // Remove a mensagem após 5 segundos
        setTimeout(() => mensagemAlerta.textContent = "", 5000);
      }
      return; // Interrompe a execução se houver campos vazios
    }

    // Cria uma chave única com nome, turma e data de hoje
    const chave = `${nomeDigitado}_${turmaDigitada}_${hoje}`;
    
    // Verifica se já existe registro de participação para hoje
    const jaJogou = localStorage.getItem(chave);

    if (jaJogou) {
      // Exibe mensagem avisando que já jogou hoje
      if (mensagemAlerta) {
        mensagemAlerta.textContent = "⚠️ Você já participou hoje!";
        // Remove a mensagem após 5 segundos
        setTimeout(() => mensagemAlerta.textContent = "", 5000);
      }
      return; // Interrompe o login se já jogou hoje
    }

    // Se não jogou ainda, salva os dados do aluno
    localStorage.setItem("nomeAluno", nomeDigitado);
    localStorage.setItem("turmaAluno", turmaDigitada);

    // Redireciona para a página da raspadinha
    window.location.href = "raspadinha.html";
  });
});
