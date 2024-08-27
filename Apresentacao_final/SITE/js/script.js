function initMap() {
    // Coordenadas de Blumenau
    var blumenau = { lat: -26.9194, lng: -49.0661 };
    // Locais dos eventos
    var locaisEventos = [
        { lat: -26.87438501430777, lng:  -49.054191601018964, titulo: 'Caminhada', descricao: '13ª Caminhada, venha participar conosco!' },
        { lat: -26.91533281054232, lng: -49.08462958882879, titulo: 'Oktoberfest', descricao: 'A maior atração turistica de Blumenau!' },
        { lat: -26.899399408923976,  lng: -49.07567206369537, titulo: 'Medieva in Norden', descricao: 'Evento Cultural da Idade Média' },
        { lat: -26.91836384981852, lng: -49.068101219515356, titulo: '11ª Edição Colmeia', descricao: 'Teatro Carlos Gomes será ocupado por muita música e exposições de artes visuais...' }
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