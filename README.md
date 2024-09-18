<h1>Guia de Anotações para Projetos React</h1>

1.1. Criar um Novo Projeto React
npx create-react-app nome-do-projeto

2.1. Instalar Dependências
npm install

2.2. Adicionar Novas Dependências
npm install nome-da-dependencia

Para adicionar uma dependência de desenvolvimento (devDependency):
npm install nome-da-dependencia --save-dev

3.1. Iniciar o Servidor de Desenvolvimento
npm start

3.2. Construir o Projeto para Produção
npm run build

<h1>4. Solução de Problemas Comuns</h1>

4.1. next não é reconhecido como um comando
npm install next react react-dom

4.2. Diretório .next não encontrado
npm run build

4.3. Erros de Vulnerabilidades de Segurança
npm audit fix

Para forçar correções (pode atualizar para versões incompatíveis):
npm audit fix --force

5. Comandos Úteis
5.1. Atualizar Dependências
npm update

6. Ambiente de Desenvolvimento
6.1. Configuração de Variáveis de Ambiente
Crie um arquivo .env na raiz do projeto para definir variáveis de ambiente. Exemplo:
REACT_APP_API_URL=http://api.exemplo.com

6.2. Limpar Cache
npm cache clean --force

