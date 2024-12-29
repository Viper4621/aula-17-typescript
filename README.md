# configurando typescript

1. Inicializar um projeto Node.js
2. instalar o typeScript
  2.1 Instalação global : `npm install -g typescript` = não aconselhavel pois fica na maquina e projetos antigos sem suporte a atualização de ts vai apresentar erros
  2.2 Instalação  local (dentro do projeto) = `npm install typescript -D` = final -D pois vamos usar apenas no desenvolvimento
3. Utilizar o typescript instalado para transpilar nosso codigo = converter ts para js = terminal `npx tsc nome do arquivo`
 3.1 `npx tsc nome do arquivo` toda alteração que fizermos precisamos compilar novamente pois no index.html usamos o arquivo .js
 3.2 ou usamos parametro no codigo para fazer atualização automatica fica escutando as mudanças `npx tsc nome do arquivo --watch`
 3.3 para configurar o typescript `npx tsc --init` inicializa todas configurações em nosso projeto
 3.4 com ts inicializado dentro do projeto só usamos `npx tsc` com isso caso tivermos 10 arquivos ts no projeto ele compila todos ao mesmo tempo
 `"noEmitOnError": true,  ` essa configuração não vai gerar um arquivo.js se caso existirem erros no typescript
 strict: true = para habilidar todas checagens de typagem e ver se esta correto
 target: es2016 = versão que queremos rodar nosso typescript convertendo ou transpilando a versao do js de acordo com utilizada
 4. geralmente vamos trabalhar com projetos react já com typescript configurado
