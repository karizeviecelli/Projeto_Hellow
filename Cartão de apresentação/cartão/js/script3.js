
function mostrarTopFilmes() {
    $('.nav-tabs a[href="#top-filmes"]').tab('show');
}

function mostrarTopSeries() {
    $('.nav-tabs a[href="#top-series"]').tab('show');
}

$('.nav-tabs a[href="#top-filmes"]').click(function() {
   
    console.log("Clicou em Top 10 Filmes");
});

$('.nav-tabs a[href="#top-series"]').click(function() {
   
    console.log("Clicou em Top 10 Séries");
});
