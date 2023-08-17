## Teste Prático para Vaga de Desenvolvedor PHP/Laravel

### Rotas da aplicação
-   GET para **localhost/api/products**: Listar todos os produtos
-   GET para **localhost/api/products/{id}**: Exibir os detalhes de um produto específico
-   POST para **localhost/api/products**: Criar um novo produto, enviando no corpo da requisição os dados obrigatórios (name, price, amount)
-   PUT para **localhost/api/products/{id}**: Atualizar os detalhes de um produto, enviando no corpo da requisição os dados obrigatórios (name, price, amount)
-   DELETE para **localhost/api/products/{id}**: Excluir um produto
-   GET para: **localhost/api/products/findByName/{name}**: Buscar produtos pelo nome, permitindo pesquisa parcial.
    
### Geração do banco
_Para gerar a tabela utilizar o comando **php artisan migrate**_)

### Método para validação e criação de produtos
Os exemplos estão em app/Requests/StorageProductRequest.php e app/Requests/UpdateProductRequest.php_

### Parte 2: Frontend (jQuery)
_Acessar a página principal da aplicação, layout muito simples._)
