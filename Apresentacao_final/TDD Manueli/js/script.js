function initMap() {
    // Coordenadas de Blumenau
    var blumenau = { lat: -26.9194, lng: -49.0661 };
    // Locais dos eventos
    var locaisEventos = [
        { lat: -26.913829999169494, lng: -49.06906395417601, titulo: 'prefeitura Blumenau', descricao: 'Descrição do Evento 1' },
        { lat: -26.91539021042188, lng: -49.08461885889006, titulo: 'Vila Germânica Natal', descricao: 'Descrição do Evento 2' },
        { lat: -26.91320773976328, lng: -49.08550688957664, titulo: 'Vila Germânica Desfile', descricao: 'Descrição do Evento 3' }
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