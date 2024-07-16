function initMap() {
    // Coordenadas de Blumenau
    var blumenau = { lat: -26.9194, lng: -49.0661 };
    // Locais dos eventos
    var locaisEventos = [
        { lat: -26.91533761722184, lng: -49.08472614429669, titulo: 'Oktoberfest', descricao: 'O maior evento de Blumenau' },
        { lat: -26.91429707549207, lng: -49.08489277608387, titulo: 'Desfile de Natal', descricao: 'A magia de natal em blumenau' },
        { lat: -26.91374074724827, lng: -49.0692123019683, titulo: 'Aniversário da Cidade', descricao: 'Prefeitura de Blumenau, um otimo lugar para tirar fotos e conhecer' }
    ];
    // Criação do mapa
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: blumenau
    });
    // Adicionando marcadores no mapa
    locaisEventos.forEach(function(evento) {
        var marker = new google.maps.Marker({
            position: { lat: evento.lat, lng: evento.lng },
            map: map,
            title: evento.titulo
        });
        var infowindow = new google.maps.InfoWindow({
            content: '<h5>' + evento.titulo + '</h5><p>' + evento.descricao + '</p>'
        });
        marker.addListener('click', function() {
            infowindow.open(map, marker);
        });
    });
}