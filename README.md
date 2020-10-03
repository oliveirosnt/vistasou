# Projeto da disciplina de Princípios DevWeb 2020.0
Oliveiros Cavalcanti de Oliveira Neto, 117110810

## Comando:
- Tanto no front quanto no back basta dar um "npm install", depois "npm start" e  por último acessar localhost:3000.

## Consiste no comercio eletrônico da marca de roupas SOU.
- A tela inicial terá como base uma loja padrão, com um banner e produtos exibidos;
- Os produtos devem ter nome, preço e descrição;
- Usuários podem se cadastrar no site e fazer login para ver seus produtos favoritos;

## Lista de implementações:
- [x] HTML da página mais importante (página inicial);
- [x] Backend básico;
- [x] Divisão em componentes usando react da página principal;
- [x] Um componente afetado por uma prop (Product);
- [x] Componente com estado interno alterado (Product);

# Entrega 01:
- Acessar pasta "/frontend";
- Abrir o arquivo "vistasou"prototype.html";
- O html representa a página inicial da loja SOU.

# Entrega 02:
- Acessar pasta "/backend";
- Inicializar aplicação com comando "npm start";
- O GET de "/users" e "/products" retorna todos os elementos;
- O POST de "/users" adiciona um usuário na lista de usuários;

# Entrega 03:
- O estado interno do component Product é alterado com o click do checkbox;
- O componente Product recebe as props (nome e valor) do componente Products;

# Entrega 04:
- O componente pai "Products" manda de acordo com seu estado as props do componente filhos "Product";
