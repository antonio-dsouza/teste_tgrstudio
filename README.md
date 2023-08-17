## Teste Prático para Vaga de Desenvolvedor PHP/Laravel

**Instruções:**

1.  O teste consiste em duas partes: Backend (PHP/Laravel e MySQL) e Frontend (jQuery).
2.  Use o Laravel Eloquent para a comunicação com o banco de dados MySQL.
3.  O teste avaliará suas habilidades em criar funcionalidades do lado do servidor (Backend) e interações do lado do cliente (Frontend).

### Parte 1: Backend (PHP/Laravel e MySQL)

1.  Crie uma nova aplicação Laravel com uma tabela chamada `produtos` que possui os seguintes campos: `id`, `nome`, `descricao`, `preco`, `quantidade`. (_Para gerar a tabela utilizar o comando **php artisan migrate**_)
    
3.  Crie um Model, Controller e Migration para a tabela `produtos`.
    
4.  Crie rotas para as seguintes funcionalidades:
    -   Listar todos os produtos (Realizar get para: **localhost/api/products**)
    -   Exibir os detalhes de um produto específico (Realizar get para: **localhost/api/products/{id}**)
    -   Criar um novo produto (Realizar post para: **localhost/api/products**, enviando no corpo da requisição os dados obrigatórios (name, price, amount))
    -   Atualizar os detalhes de um produto (Realizar put para: **localhost/api/products/{id}**, enviando no corpo da requisição os dados obrigatórios (name, price, amount))
    -   Excluir um produto (Realizar delete para: **localhost/api/products/{id}**)

5.  Crie um mecanismo de validação para a criação e atualização de produtos (nome não pode estar vazio, preço e quantidade devem ser números positivos). (Os exemplos estão em app/Requests/StorageProductRequest.php e app/Requests/UpdateProductRequest.php_)
    
6.  Implemente uma rota para buscar produtos pelo nome, permitindo pesquisa parcial. (Realizar get para: **localhost/api/products/findByName/{name}**)
    
7.  Utilize o Eloquent para realizar todas as operações relacionadas ao banco de dados.

### Parte 2: Frontend (jQuery)

1.  Crie uma página HTML simples com uma tabela para exibir a lista de produtos.
    
2.  Use jQuery para realizar as seguintes tarefas: (_Acessar a página principal da aplicação, layout muito simples._)
    -   Carregar a lista de produtos via AJAX e preencher a tabela.
    -   Permitir a exclusão de um produto via AJAX, com confirmação de exclusão.

**Avaliação:**

-   Organização e estrutura do código.
-   Funcionalidade.
-   Conhecimento da tecnologia.
