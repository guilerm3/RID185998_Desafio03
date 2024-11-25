# Gerenciador de Tarefas - Mobile-First

Este é um **gerenciador de tarefas** simples e funcional, criado com o objetivo de aprender e aplicar conceitos de **responsividade mobile-first**. A página foi projetada para ser otimizada para dispositivos móveis, garantindo que os usuários possam gerenciar suas tarefas de maneira prática e eficiente diretamente do seu smartphone.

## Objetivo

O principal objetivo deste projeto é criar um **gerenciador de tarefas responsivo**, com foco em dispositivos móveis. A página foi construída utilizando a abordagem **mobile-first**, garantindo que a experiência do usuário seja fluida e intuitiva em smartphones. O projeto oferece funcionalidades como adicionar, editar e remover tarefas, além de marcar tarefas como concluídas.

Atualmente, as tarefas são armazenadas localmente no **sessionStorage** do navegador. No futuro, planejo integrar o projeto com um **banco de dados** para garantir a persistência das tarefas de forma mais robusta e escalável.

## Funcionalidades

- **Adição de Tarefas**: O usuário pode adicionar novas tarefas de maneira rápida e intuitiva.
- **Remoção de Tarefas**: Tarefas podem ser removidas do sistema.
- **Marcação de Tarefas Concluídas**: O usuário pode marcar tarefas como "concluídas" para melhor organização.
- **Design Responsivo (Mobile-First)**: A página foi construída utilizando **media queries** para garantir uma ótima experiência em dispositivos móveis, com ajustes automáticos para telas maiores.
- **Armazenamento Sessão**: As tarefas são armazenadas no **sessionStorage** apenas para fins de testes da aplicação

## Tecnologias Utilizadas

- **HTML5**: Estrutura básica da página.
- **CSS3**: Estilização e design responsivo.
- **JavaScript**: Lógica para adicionar, editar, remover e concluir tarefas.
- **Media Queries**: Foco em otimizar o layout para dispositivos móveis, ajustando a página conforme a largura da tela.
- **Flexbox**: Para garantir a flexibilidade e o alinhamento dos elementos de forma eficiente, especialmente em dispositivos móveis.

## Como Rodar o Projeto

1. Clone o repositório:
    ```bash
    git clone https://github.com/guilerm3/RID185998_Desafio03.git
    ```

2. Navegue até o diretório do projeto:
    ```bash
    cd RID185998_Desafio03
    ```

3. Abra o arquivo `index.html` em um navegador de sua preferência.

4. Para testar a responsividade e as funcionalidades, você pode usar as ferramentas de desenvolvedor do navegador (geralmente com a tecla `F12` ou `Ctrl+Shift+I`) e ativar o modo de simulação de dispositivos móveis.

## Como Personalizar

1. **Funcionalidade**: Você pode adicionar novos recursos, como a possibilidade de categorizar tarefas, adicionar prazos ou mesmo integrar com um sistema de autenticação de usuários no futuro.
2. **Estilos**: Modifique o arquivo `style.css` para ajustar as cores, fontes e o layout conforme necessário, mantendo o foco na experiência do usuário em dispositivos móveis.
4. **Media Queries**: Adicione novas media queries no arquivo `style.css` para ajustar o layout e o comportamento da página em diferentes resoluções de tela.

## Desafios e Aprendizados

Durante o desenvolvimento deste projeto, explorei e aprendi sobre:

- **Design Mobile-First**: Como planejar e construir um layout que seja otimizado para dispositivos móveis e depois expandir para telas maiores.
- **Responsividade com Media Queries**: Como usar **media queries** para ajustar a página conforme a largura da tela, criando uma experiência fluida e eficiente em diferentes dispositivos.
- **Persistência de Dados com LocalStorage**: Como usar **localStorage** para manter as tarefas mesmo após o usuário recarregar a página. Em atualizações futuras, o projeto será integrado com um banco de dados para escalabilidade.
- **Interatividade com JavaScript**: Como criar uma interface interativa e dinâmica para adicionar, editar, remover e concluir tarefas.
