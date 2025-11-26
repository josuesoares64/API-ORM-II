# API ORM II – Avançando nas Funcionalidades do Sequelize (Formação Alura)

Este projeto faz parte da formação da Alura **"ORM com Node.js: avançando nas funcionalidades do Sequelize"** (Parte II).  
O objetivo é evoluir a API criada na primeira parte do curso, implementando novas funcionalidades e aplicando recursos mais avançados do Sequelize, como escopos, transações, relacionamentos, serviços reutilizáveis e boas práticas de arquitetura.

---

## 📌 Sobre o projeto

A API gerencia **Pessoas** e suas **Matrículas**, permitindo operações completas de CRUD, além de funcionalidades adicionais como:

- Cancelar um estudante e automaticamente cancelar suas matrículas  
- Listar matrículas ativas  
- Listar todas as matrículas (ativas ou não)  
- Listar pessoas com escopo customizado  
- Organização do código em **Controllers**, **Services** e **Routes**  

A arquitetura foi pensada para facilitar manutenção, testes e evolução do projeto.

---

## 🚀 Tecnologias e conceitos aplicados

- Node.js  
- Express  
- Sequelize ORM  
- SQLite  
- Arquitetura MVC + camada de Services  
- Escopos (Scopes)  
- Operações em transações  
- Métodos reutilizáveis na camada de serviço  
- Soft delete com `paranoid: true`

---

## 📂 Endpoints principais

### 👤 Pessoas
- `GET /pessoas` → lista pessoas ativas  
- `GET /pessoas/todos` → lista todas as pessoas (incluindo inativas)  
- `GET /pessoas/:id` → busca uma pessoa por ID  
- `POST /pessoas` → cria uma nova pessoa  
- `PUT /pessoas/:id` → atualiza dados da pessoa  
- `DELETE /pessoas/:id` → exclui pessoa  
- `PUT /pessoas/:estudante_id/cancela` → **cancela pessoa + suas matrículas vinculadas**

---

### 🎓 Matrículas
- `GET /pessoas/:estudante_id/matriculas` → matrículas ativas  
- `GET /pessoas/:estudante_id/matriculas/todos` → todas as matrículas  
- `GET /pessoas/:estudante_id/matriculas/:id` → matrícula específica  
- `POST /pessoas/:estudante_id/matriculas` → cria matrícula  
- `PUT /pessoas/:estudante_id/matriculas/:id` → atualiza matrícula  
- `DELETE /pessoas/:estudante_id/matriculas/:id` → exclui matrícula  
- `GET /pessoas/matriculas/lotadas` → lista de cursos com turmas lotadas  

---

## 🧩 Estrutura do projeto

controllers/ → lógica de entrada e saída da API
services/ → regras de negócio e acesso ao banco
routes/ → definição das rotas
database/ → models, migrations e arquivo SQLite
server.js → inicialização do servidor Express


---

## 🧑‍💻 Autor
**Josué Soares**  
Desenvolvedor em formação, criando projetos reais para consolidar conhecimento e fortalecer o portfólio.

---

## ⭐ Se esse projeto te ajudou, deixe uma estrela!
