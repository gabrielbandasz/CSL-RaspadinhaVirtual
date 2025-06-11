document.addEventListener("DOMContentLoaded", () => {
  // Recupera os dados do aluno armazenados no localStorage
  const nome = localStorage.getItem("nomeAluno");
  const turma = localStorage.getItem("turmaAluno");
  const hoje = new Date().toISOString().split("T")[0];
  const chaveParticipacao = `${nome}_${turma}_${hoje}`;

  // Se nome ou turma não estiverem disponíveis, redireciona para a página inicial
  if (!nome || !turma) {
    window.location.href = "index.html";
    return;
  }

  // Se o aluno já participou hoje, redireciona e bloqueia acesso
  if (localStorage.getItem(chaveParticipacao)) {
    alert("⚠️ Você já jogou hoje. Volte amanhã!");
    window.location.href = "index.html";
    return;
  }

  // Seleciona elementos do DOM
  const container = document.querySelector(".container");
  const raspadinhasContainer = document.getElementById("raspadinhas");
  const mensagemFinal = document.getElementById("mensagemFinal");

  // Cria saudação personalizada
  const saudacao = document.createElement("h2");
  saudacao.textContent = `Olá, ${nome} da turma ${turma}! Escolha uma raspadinha:`;
  container.insertBefore(saudacao, raspadinhasContainer);

  const simbolos = [
    "🎁 Camiseta da escola", "🖊️ Caneta personalizada", "50% de Desconto na Cantina",
    "📚 10% na matrícula", "🍭 Kit de doces", "🥤 Copo personalizado",
    "🎧 Fones de ouvido", "Você Ganhou R$ 50,00"
  ];

  const MAX_TENTATIVAS = 3;
  let tentativasFeitas = 0;
  const raspadinhas = [];

  const somVitoria = new Audio("sons/victorymale-version-230553.mp3");
  const somDerrota = new Audio("sons/game_over.mp3");

  // Gera raspadinhas com prêmios aleatórios
  for (let i = 0; i < MAX_TENTATIVAS; i++) {
    const simboloAleatorio = simbolos[Math.floor(Math.random() * simbolos.length)];
    raspadinhas.push(simboloAleatorio);
  }

  function criarRaspadinha(simbolo, index) {
    const div = document.createElement("div");
    div.classList.add("raspadinha");
    div.setAttribute("role", "listitem");
    div.setAttribute("tabindex", "0");
    div.setAttribute("aria-label", `Raspadinha ${index + 1}`);

    const premioDiv = document.createElement("div");
    premioDiv.classList.add("premio");
    premioDiv.textContent = simbolo;
    div.appendChild(premioDiv);

    const canvas = document.createElement("canvas");
    canvas.width = 140;
    canvas.height = 120;
    div.appendChild(canvas);
    raspadinhasContainer.appendChild(div);

    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "#C0C0C0";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    let isDrawing = false;
    let raspada = false;

    function desenhar(e) {
      if (!isDrawing) return;

      const rect = canvas.getBoundingClientRect();
      const clientX = e.clientX ?? e.touches?.[0]?.clientX;
      const clientY = e.clientY ?? e.touches?.[0]?.clientY;
      if (clientX === undefined || clientY === undefined) return;

      const x = clientX - rect.left;
      const y = clientY - rect.top;

      ctx.globalCompositeOperation = "destination-out";
      ctx.beginPath();
      ctx.arc(x, y, 15, 0, Math.PI * 2, false);
      ctx.fill();
    }

    function processarRaspagem() {
      if (raspada) return;

      const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      let pixelsTransparente = 0;

      for (let i = 3; i < imgData.data.length; i += 4) {
        if (imgData.data[i] === 0) pixelsTransparente++;
      }

      const totalPixels = canvas.width * canvas.height;
      const porcentagemTransparente = (pixelsTransparente / totalPixels) * 100;

      if (porcentagemTransparente > 50) {
        raspada = true;
        tentativasFeitas++;
        canvas.remove();
        div.classList.add("raspada");
        atualizarMensagem();

        if (tentativasFeitas === MAX_TENTATIVAS) {
          verificarResultado();
        }
      }
    }

    // Eventos mouse e toque
    canvas.addEventListener("mousedown", () => { if (!raspada) isDrawing = true; });
    canvas.addEventListener("mouseup", () => { if (isDrawing) { isDrawing = false; processarRaspagem(); } });
    canvas.addEventListener("mousemove", desenhar);

    canvas.addEventListener("touchstart", (e) => {
      e.preventDefault();
      if (!raspada) isDrawing = true;
    }, { passive: false });

    canvas.addEventListener("touchend", () => {
      if (isDrawing) {
        isDrawing = false;
        processarRaspagem();
      }
    });

    canvas.addEventListener("touchmove", (e) => {
      e.preventDefault();
      desenhar(e);
    }, { passive: false });
  }

  function atualizarMensagem() {
    const restantes = MAX_TENTATIVAS - tentativasFeitas;
    mensagemFinal.textContent = restantes > 0
      ? `Você tem ${restantes} raspadinha${restantes > 1 ? 's' : ''} restante${restantes > 1 ? 's' : ''}.`
      : "⚠️ Você esgotou suas tentativas! Volte amanhã.";
  }

  function verificarResultado() {
    const primeira = raspadinhas[0];
    const ganhou = raspadinhas.every(s => s === primeira);

    if (ganhou) {
      somVitoria.play();
      mensagemFinal.textContent = `🎉 Parabéns! Você ganhou 3x "${primeira}"!`;
    } else {
      somDerrota.play();
      mensagemFinal.textContent = "😞 Não foi dessa vez. Tente novamente amanhã!";
    }

    // Marca que o aluno participou hoje
    localStorage.setItem(chaveParticipacao, "true");

    // Desativa todas as raspadinhas
    document.querySelectorAll(".raspadinha").forEach(div => div.classList.add("desativada"));
  }

  raspadinhas.forEach((simbolo, idx) => criarRaspadinha(simbolo, idx));

  // Botão de sair
  document.getElementById("sairBtn").addEventListener("click", () => {
    localStorage.removeItem("nomeAluno");
    localStorage.removeItem("turmaAluno");
    window.location.href = "index.html";
  });

  // MODO CLARO / ESCURO
  const toggleThemeBtn = document.getElementById("toggle-theme");
  const body = document.body;
  const temaSalvo = localStorage.getItem("tema") || "claro";

  function aplicarTema(tema) {
    if (tema === "escuro") {
      body.classList.add("dark");
      body.classList.remove("light");
      toggleThemeBtn.textContent = "☀️";
    } else {
      body.classList.add("light");
      body.classList.remove("dark");
      toggleThemeBtn.textContent = "🌙";
    }
    localStorage.setItem("tema", tema);
  }

  aplicarTema(temaSalvo);

  toggleThemeBtn.addEventListener("click", () => {
    const temaAtual = body.classList.contains("dark") ? "escuro" : "claro";
    aplicarTema(temaAtual === "escuro" ? "claro" : "escuro");
  });
});
