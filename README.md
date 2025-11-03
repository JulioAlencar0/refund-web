
<img width="2880" height="1620" alt="Thumbnail" src="https://github.com/user-attachments/assets/8e4fc2c8-f2a0-4326-9ccd-8fea5dd64717" />

# 💰 Sistema de Reembolso Web

Uma aplicação **web** desenvolvida para gerenciar solicitações de reembolso de forma simples, rápida e eficiente.  
O sistema se comunica com a **API REST Node.js** e permite **visualizar, cadastrar, editar e excluir solicitações**, com upload de comprovantes e categorização.

---

## 🚀 Tecnologias Utilizadas

### 🖥️ **Frontend**
- ⚛️ **React.js** — interface moderna e reativa  
- 🌐 **Axios** — comunicação com a API  
- 🧭 **React Router DOM** — navegação entre páginas  
- 📸 **FileReader API** — upload e preview de comprovantes  

### ⚙️ **Backend**
- 🟩 **Node.js + Express.js** — servidor REST API  
- 🐘 **PostgreSQL / SQLite** — banco de dados relacional  
- 🛠️ **pg** — conexão e queries SQL  
- 🔄 **CORS e dotenv** — controle de segurança e variáveis de ambiente  

---

## 🧠 Funcionalidades Principais

✅ Listagem de todas as solicitações de reembolso  
✅ Cadastro de novas solicitações com nome, valor, categoria e comprovante  
✅ Exclusão de solicitações  
✅ Visualização de detalhes da solicitação  
✅ Upload e download de comprovantes  
✅ Exibição da categoria diretamente na tabela  
✅ Integração total com a API Node.js (porta padrão: `3000`)

---

## ⚙️ Estrutura de Pastas

```bash
📂 refund-web
├── 📁 src
│   ├── 📁 components        # Componentes reutilizáveis (botões, cards, modais etc)
│   ├── 📁 pages             # Páginas principais (Home, Detalhes, Nova Solicitação)
│   ├── 📁 services          # Configuração do Axios e comunicação com a API
│   ├── 📁 assets            # Ícones, imagens e arquivos estáticos
│   ├── App.jsx              # Componente principal do app
│   └── main.jsx             # Ponto de entrada da aplicação
├── 📄 package.json
├── 📄 README.md
└── 📄 .env
````
🧩 Instalação e Execução

🔧 1. Clonar o repositório
```bash 
git clone https://github.com/seu-usuario/refund-web.git
cd refund-web
````
💅 Preview do Sistema

🖼️ Tela inicial: listagem de solicitações
🖼️ Modal: criação de nova solicitação com upload
🖼️ Detalhes: comprovante e status da solicitação


Desenvolvido por Júlio César👨‍💻

💚 Estudante de Análise e Desenvolvimento de Sistemas
🚀 Sonhando alto e construindo o futuro com código.

📧 Email: julioc.alencar30@gmail.com
🌍 LinkedIn: linkedin.com/in/juliocalencar

🧾 Licença

Este projeto está sob a licença MIT.
Sinta-se livre para usar, modificar e contribuir! 
