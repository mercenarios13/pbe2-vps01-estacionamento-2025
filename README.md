# ESTACIONAMENTO ACME API
Situação de Aprendizagem - Back-End (Node.JS, JavaSript, VsCode, ORM Prisma, Insomnia)
## Contextualização
O ESTACIONAMENTO ACME tem atuado em nossa cidade com ótimo atendimento e segurança, é nosso cliente e necessita de um sistema Web para registro dos estacionamentos diários.<br>O P.O. após uma visita ao cliente, elaborou o DER e UML DC(Diagrama de Classes) a seguir e elencou os requisitos funcionais.<br>
![DER e DC](./docs/der-dc.png)
## Desafio
Desenvolver as funcionalidades conforme requisitos

### Requisitos funcionais
- [RF001] O sistema deve permitir o CRUD de veículos.
    - [RF001.1] Os campos cor e ano não são obrigatórios, podem ser nulos.
    - [RF001.2] A rota **readOne** do **veículo** deve mostrar os dados de um veículo específico e seus **estacionamentos**.
- [RF002] O sistema deve permitir o CRUD de estadias.
    - [RF002.1] O sistema deve associar a estadia a um veículo.
    - [RF002.2] Ao cadastrar uma nova estadia **create** no controller, a data e hora da **entrada** deve ser gerada pelo Banco de Dados @dedault(now()).
    - [RF002.3] Ao cadastrar uma nova estadia **create** no controller, a **saida**, pode ser nula **"?"** pois será preenchida na rota **update** quando o veículo saír do estacionamento.
    - [RF002.4] Ao cadastrar uma nova estadia **create** no controller, o **valorTotal**, deve ser nulo **"?"** pois será calculado na rota **update** quando o veículo saír do estacionamento.
    - [RF002.5] Se ao realizar **update** o campo **saída** for enviado o sistema deve calcular a **valorTotal** com a formula **"valorHora * (saida - entrada)"**.

### Casos de teste (Insomnia)
- [CT001] Deve ser cadastrado pelo menos 5 veículos.
    - [CT001.1] Pelo menos dois veículos devem ter ano e cor cadastrados.
- [CT002] Cadastre, altere e exclua um veículo.
- [CT003] Cadastre uma estadia para cada veículo.
    - [CT003.1] Pelo menos dois veículos devem ter duas ou mais Estadias cadastradas.
- [CT004] Cadastre, altere e exclua uma estadia.
- [CT005] Altere pelo menos duas estadias preenchendo a **saida** e verificando se calcula o **valorTotal**.

## Tecnologias
Node.js

Plataforma de execução para JavaScript no lado do servidor.
Express.js

Framework para criar APIs REST de forma rápida e eficiente.
Prisma ORM

ORM (Object-Relational Mapping) para interagir com o banco de dados de forma simples e eficiente.
SQLite

Banco de dados leve e embutido, usado para armazenar os dados do sistema.
Insomnia

Ferramenta para testar APIs REST e realizar os casos de teste.
Visual Studio Code (VS Code)

IDE utilizada para desenvolvimento do projeto.
JavaScript

Linguagem de programação usada para implementar a lógica do sistema.
## Passo a Passo de como executar a API
