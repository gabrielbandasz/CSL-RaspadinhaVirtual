
# 🎉 Projeto Raspadinha Escolar

## 📝 Descrição

Aplicação web interativa para uma raspadinha virtual voltada para uso escolar. O usuário faz login informando nome e turma para participar de um sorteio diário de prêmios. A raspadinha utiliza a API Canvas para o efeito visual de raspagem, garantindo que cada usuário participe apenas uma vez por dia. O sistema também conta com tema claro e escuro, com a preferência do usuário salva localmente.

---

## 🎯 Funcionalidades

* Login personalizado: nome e turma do usuário para acesso.
* Limite diário: participação única por usuário a cada dia.
* Raspadinha virtual: três cartões com prêmios aleatórios para raspar com mouse ou toque.
* Verificação de vitória: três prêmios iguais indicam vitória.
* Feedback visual e sonoro para vitória e derrota.
* Tema claro/escuro com botão para alternar e salvar preferência.
* Logout para limpar dados e voltar à tela de login.
* Acessibilidade com atributos ARIA e navegação por teclado.

---

## 🛠️ Tecnologias utilizadas

* HTML5
* CSS3
* JavaScript (ES6+)
* API Canvas
* LocalStorage

---

## 🚀 Como usar

1. Abra o arquivo `index.html` no navegador.
2. Na tela de login, informe seu nome e turma, depois clique em **Entrar**.
3. Raspe os três cartões na tela da raspadinha usando mouse ou toque.
4. Confira se ganhou (três prêmios iguais).
5. Apenas uma participação por dia é permitida.
6. Use o botão para alternar entre tema claro e escuro.
7. Clique em **Sair** para encerrar sessão e voltar ao login.

---

## 📁 Estrutura do projeto

```
/css
  styles.css          # Estilos gerais e temas
/js
  script.js           # Lógica do login, raspadinha, temas e controle de participação
index.html            # Tela de login
raspadinha.html       # Tela da raspadinha e jogo
/assets
  /sounds             # Áudios para feedbacks de vitória e derrota
  /images             # Imagens e ícones do projeto
```

---

## ⚙️ Personalização

* Prêmios: altere facilmente a lista de prêmios no arquivo `script.js`.
* Tema: ajuste cores e estilos em `styles.css`.
* Sons: substitua arquivos na pasta `/assets/sounds`.

---

## 🙌 Considerações finais

Projeto voltado para uso educacional, demonstrando conceitos como manipulação gráfica, persistência local e interação com o usuário. Ideal para engajar alunos em atividades lúdicas e dinâmicas nas escolas.

---

## 👨‍💻 Autor

Gabriel Bandasz e Gabriel Sandes

---

## 🖼️ Imagens do projeto

![Captura de tela 2025-06-11 151031](https://github.com/user-attachments/assets/4138a874-2abb-411b-99a7-5e90b25ed55f)
![Captura de tela 2025-06-11 151044](https://github.com/user-attachments/assets/20e55148-c980-4f07-9510-4e1a32d5bf7b)
