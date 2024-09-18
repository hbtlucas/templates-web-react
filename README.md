<h1>Guia de Anotações para Projetos React</h1>

1.1. Criar um Novo Projeto React<br>
npx create-react-app nome-do-projeto<br>

2.1. Instalar Dependências<br>
npm install<br>

2.2. Adicionar Novas Dependências<br>
npm install nome-da-dependencia<br>

Para adicionar uma dependência de desenvolvimento (devDependency):<br>
npm install nome-da-dependencia --save-dev<br>

3.1. Iniciar o Servidor de Desenvolvimento<br>
npm start<br>

3.2. Construir o Projeto para Produção<br>
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

5. Comandos Úteis<br>
5.1. Atualizar Dependências<br>
npm update<br>

6. Ambiente de Desenvolvimento<br>
6.1. Configuração de Variáveis de Ambiente<br>
Crie um arquivo .env na raiz do projeto para definir variáveis de ambiente. Exemplo:<br>
REACT_APP_API_URL=http://api.exemplo.com<br>

6.2. Limpar Cache<br>
npm cache clean --force<br>

