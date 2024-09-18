<h1>Guia de Anotações para Projetos React</h1>

<h4>1.1. Criar um Novo Projeto React<br></h4>
npx create-react-app nome-do-projeto<br>

<h4>2.1. Instalar Dependências<br></h4>
npm install<br>

<h4>2.2. Adicionar Novas Dependências<br></h4>
npm install nome-da-dependencia<br>

Para adicionar uma dependência de desenvolvimento (devDependency):<br>
npm install nome-da-dependencia --save-dev<br>

<h4>3.1. Iniciar o Servidor de Desenvolvimento<br></h4>
npm start<br>

<h4>3.2. Construir o Projeto para Produção<br></h4>
npm run build<br>

<h1>4. Solução de Problemas Comuns</h1>

4.1. next não é reconhecido como um comando<br>
npm install next react react-dom<br>

4.2. Diretório .next não encontrado<br>
npm run build<br>

4.3. Erros de Vulnerabilidades de Segurança<br>
npm audit fix<br>

Para forçar correções (pode atualizar para versões incompatíveis):<br>
npm audit fix --force<br>

<h4>5. Comandos Úteis<br></h4>
5.1. Atualizar Dependências<br>
npm update<br>

6. Ambiente de Desenvolvimento<br>
6.1. Configuração de Variáveis de Ambiente<br>
Crie um arquivo .env na raiz do projeto para definir variáveis de ambiente. Exemplo:<br>
REACT_APP_API_URL=http://api.exemplo.com<br>

6.2. Limpar Cache<br>
npm cache clean --force<br>

