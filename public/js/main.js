$(document).ready(function() {
    $.ajax({
        url: '/api/products',
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            console.log(data);
            data.forEach(product => {
                $("#productsTable > tbody").append(`
                <tr id="productRow${product.id}">
                    <td>${product.name}</td>
                    <td>${product.description ? product.description : "Sem descrição cadastrada."}</td>
                    <td>R$ ${product.price}</td>
                    <td>${product.amount}</td>
                    <td>
                        <button title="Excluir produto" type="button" onclick="deleteProduct(${product.id});" class="table-button">
                            <i class="bx bx-trash-alt"></i>
                        </button>
                    </td>
                </tr>
                `)
            });
        },
        error: function() {
            alert('Erro ao carregar detalhes do produto.');
        }
    });
});

function deleteProduct(id) {    
    Swal.fire({
        title: 'Tem certeza que deseja deletar o produto?',
        text: "Você não será capaz de reverter isso!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Deletar',
        cancelButtonColor: '#d33',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            $.ajax({
                url: `/api/products/${id}`,
                type: "DELETE",
                success: function (result) {
                    if (result) {
                        $(`#productRow${id}`).remove();
                        Swal.fire({
                            text: "Produto deletado com sucesso",
                            icon: "success",
                            width: 450,
                            timerProgressBar: true,
                            showConfirmButton: false,
                            toast: true,
                            position: 'top-end',
                            timer: 3000,
                        }).then(function () {
                            document.location.reload(true);
                        });
                    }
                },
                error: function (err) {
                    Swal.fire({
                        title: "Houve um problema!",
                        title: "Não foi possível deletar o produto.",
                        text: JSON.parse(err.responseText).message,
                        icon: "warning",
                    });
                },
            });
        }
    });
}