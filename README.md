# API ORM II – Sistema de Pessoas e Matrículas (Node.js + Sequelize)

Este projeto foi desenvolvido com foco em estudo/prática de ORM, camada de serviços, controllers e relacionamento entre tabelas usando **Node.js**, **Express**, **Sequelize** e **SQLite**.

---

## 📌 Sobre o projeto

A API gerencia **Pessoas** e suas **Matrículas**, permitindo criar, listar, atualizar, excluir e cancelar registros.  
O código segue o padrão de arquitetura em **Controllers**, **Services** e **Routes**, deixando o projeto organizado e fácil de manter.

---

## 🚀 Tecnologias utilizadas
- Node.js  
- Express  
- Sequelize ORM  
- SQLite  
- Nodemon (para desenvolvimento)

---

## 📂 Endpoints principais

### 👤 Pessoas
- `GET /pessoas` → lista pessoas ativas  
- `GET /pessoas/todos` → lista todas as pessoas  
- `GET /pessoas/:id` → busca uma pessoa  
- `POST /pessoas` → cria pessoa  
- `PUT /pessoas/:id` → atualiza pessoa  
- `DELETE /pessoas/:id` → exclui pessoa  
- `PUT /pessoas/:estudante_id/cancela` → **cancela pessoa + matrículas vinculadas**

### 🎓 Matrículas
- `GET /pessoas/:estudante_id/matriculas`  
- `GET /pessoas/:estudante_id/matriculas/todos`  
- `GET /pessoas/:estudante_id/matriculas/:id`  
- `POST /pessoas/:estudante_id/matriculas`  
- `PUT /pessoas/:estudante_id/matriculas/:id`  
- `DELETE /pessoas/:estudante_id/matriculas/:id`

---

## 🧩 Estrutura do projeto (simplificada)

controllers/ → regras de resposta da API
services/ → regras de negócio
routes/ → definições das rotas
database/ → models, migrations e arquivo SQLite
server.js → servidor Express


---

## 🧑‍💻 Autor
**Josué Soares**  
Desenvolvedor backend em evolução, criando projetos reais para portfólio.

---

## ⭐ Gostou do projeto?
Deixe uma estrela no repositório!  
