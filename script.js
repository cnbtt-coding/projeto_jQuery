$(document).ready(function() {

    $('#newPicButton').click(function() {
        $('.add-pic').slideDown();
    }) // Selecionando o botão de adicionar foto e implementando comportamento de abrir aba ao clicar

    $('add').click(function() {
        
    }) // Selecionando o botão de adicionar e implementando função de adicionar foto no conteúdo principal da página

    $('.cancel').click(function() {
        $('.add-pic').slideUp();
    }) // Selecionando o botão de cancelar ao abrir a aba de adicionar foto e implementando comportamendo de fechar aba ao clicar

})