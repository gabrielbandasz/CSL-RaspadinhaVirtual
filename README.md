Projeto Raspadinha Escolar
Descrição
Este projeto é uma aplicação web interativa para uma raspadinha virtual com foco em uso escolar. O usuário deve fazer login informando seu nome e turma para participar do sorteio diário de prêmios. A raspadinha utiliza canvas para o efeito visual de raspagem, e o sistema controla a participação única por dia para cada usuário. O projeto também possui tema claro e escuro com persistência da preferência.

Funcionalidades
Login personalizado: usuário informa nome e turma para acesso.

Limite diário: cada usuário pode participar apenas uma vez por dia.

Raspadinha virtual: três cartões com prêmios aleatórios para raspar usando o mouse ou toque.

Detecção de vitória: se os três prêmios forem iguais, o usuário ganha.

Feedback visual e sonoro: sons e mensagens indicam vitória ou derrota.

Tema claro/escuro: botão para alternar tema com preferência salva.

Logout: limpa dados do usuário e retorna à tela de login.

Acessibilidade: uso de atributos ARIA e navegação por teclado nas raspadinhas.

Tecnologias utilizadas
HTML5

CSS3

JavaScript (ES6+)

API Canvas para efeitos de raspadinha

LocalStorage para persistência de dados

Como usar
Abra o arquivo index.html no navegador.

Na tela de login, insira seu nome e turma e clique em "Entrar".

Na tela da raspadinha, raspe os três cartões usando o mouse ou toque.

Após raspar os três cartões, veja se você ganhou (3 prêmios iguais).

Você só poderá jogar uma vez por dia.

Use o botão do tema para alternar entre modo claro e escuro.

Clique em "Sair" para encerrar a sessão e voltar à tela de login.

Estrutura do projeto

/css
  styles.css        # Estilos gerais e temas
/js
  script.js         # Lógica do login, raspadinha e temas
index.html          # Tela inicial e login
raspadinha.html     # Tela da raspadinha e jogo
/assets
  /sounds           # Arquivos de áudio para vitória e derrota
  /images           # Imagens e ícones do projeto

Personalização
Os prêmios podem ser facilmente alterados no arquivo JavaScript, dentro da lista de prêmios.

O tema pode ser ajustado em styles.css.

Sons podem ser substituídos na pasta /assets/sounds.

Considerações finais
Este projeto é voltado para uso educacional e demonstra conceitos de interação, persistência local e manipulação gráfica em JavaScript. Pode ser utilizado em escolas para engajar alunos com atividades lúdicas e dinâmicas.

Autor
Gabriel Bandasz e Gabriel Sandes!

Imagens 
[Captura de tela 2025-06-11 151031](https://github.com/user-attachments/assets/4138a874-2abb-411b-99a7-5e90b25ed55f)
![Captura de tela 2025-06-11 151044](https://github.com/user-attachments/assets/20e55148-c980-4f07-9510-4e1a32d5bf7b)

