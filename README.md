# TestePACTO

Aplicação desenvolvida para teste técnico em processo seletivo da empresa PACTO

A aplicação consistem em dois módulos, um com o backend e outro com o frontend.

Para buildar e executar o backend é necessário ter instalado:

* Java JDK 22
* Maven

Primeiro é necessário realizar o build do projeto digitando o comando ***mvn clean install*** no diretório base.

Feito o build é apenas necessário rodar o projeto via IDE.

Para buildar e executar o frontend é necessário ter instalado:

* NodeJS 13+

Primeiro é necessário instalar as dependências do projeto digitando o comando ***npm install*** no diretório do frontend
onde está contido o arquivo ***package.json***
Após instalar as dependências basta rodar o projeto digitando o comando ***npm start*** no terminal.

Considerações finais:
Devido ao prazo apertado não foi possível atender a todos os pontos solicitados.

Qualquer dúvida sobre o projeto basta entrar em contato comigo via whatsapp ***62 984190459***

ng --version
npm install -g @angular/cli
ng new nome-do-projeto
cd nome-do-projeto
ng serve

ng g c nome-do-componente
ng g s nome-do-servico
ng g cl models/nome-do-model --type=model
ng g m nome-do-modulo
ng g d nome-da-diretiva
ng g p nome-do-pipe
ng g g nome-do-guard


src/
│
├── app/
│   ├── components/
│   │   └── nome-do-componente/
│   │       ├── nome-do-componente.component.ts
│   │       ├── nome-do-componente.component.html
│   │       ├── nome-do-componente.component.scss
│   │       └── nome-do-componente.component.spec.ts
│   │
│   ├── models/
│   │   └── nome-do-model.model.ts
│   │
│   ├── services/
│   │   └── nome-do-servico.service.ts
│   │
│   ├── guards/
│   │   └── nome-do-guard.guard.ts
│   │
│   ├── nome-do-modulo/
│   │   └── nome-do-modulo.module.ts
│   │
│   └── app.module.ts
│
└── assets/


