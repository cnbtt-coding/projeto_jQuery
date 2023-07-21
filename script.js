$(document).ready(function() {

    $('#newPicButton').click(function() {
        $('.add-pic').slideDown();
    }) // Selecionando o botão de adicionar foto e implementando comportamento de abrir aba ao clicar.

    $('add').click(function() {
        
    }) // Selecionando o botão de adicionar e implementando função de adicionar foto no conteúdo principal da página.

    $('.cancel').click(function() {
        $('.add-pic').slideUp();
    }) // Selecionando o botão de cancelar ao abrir a aba de adicionar foto e implementando comportamendo de fechar aba ao clicar.

    $('form').on('submit', function(event) {
        event.preventDefault();
        const urlNovaImagem = $('#nova-imagem').val();
        const novoItem = $('<li></li>');
        $(`img src="${urlNovaImagem}" />`).appendTo(novoItem);
        $(`
            <div class="overlay-image-link">
                <a href = "${urlNovaImagem}" target="_blank" title="Ver imagem em tamanho real"
                    Ver imagem em tamanho real
                </a>
        </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
    }) /*
        Recuperando o valor do formulário, adicionando função para remover 
        o comportamento padrão de reload e feature que adiciona nova imagem à página.
    */
})