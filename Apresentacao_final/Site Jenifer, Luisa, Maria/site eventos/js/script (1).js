function initMap() {
    // Coordenadas de Blumenau
    var blumenau = { lat: -26.9194, lng: -49.0661 };
    // Locais dos eventos
    var locaisEventos = [
        { lat: -26.915336526899207, lng: -49.08466279295516, titulo: 'Oktoberfest Blumenau 2024', descricao: 'Evento pago' },
        { lat: -26.918497779235672, lng: -49.06807976074078, titulo: 'FENATIB', descricao: 'Evento gratuito' },
        { lat: -26.809684260528762, lng: -49.087101777937875, titulo: 'Sunset Container British Beer', descricao: 'Evento gratuito' },
        { lat: -26.91838298259716, lng: -49.06803684539757, titulo: 'Colmeia – 11ª Edição', descricao: 'Evento gratuito' },
        { lat: -26.92234602361238, lng: -49.057030460740684, titulo: 'Festival Balbúrdia 5 anos', descricao: 'Evento Gratuito' },
        { lat: -26.90462715812225, lng: -49.07845973190551, titulo: 'Exposição “Erwin Teichmann e Hans Steiner"', descricao: 'Evento gratuito' },
        { lat: -26.915326960252255, lng: -49.084716435606026, titulo: 'Febratex - Feira brasileira', descricao: 'Evento gratuito' },
        { lat: -26.91462870938951, lng: -49.0693350184125, titulo: 'Feira da Estação', descricao: 'Evento gratuito' },
        { lat: -26.91541306007359, lng: -49.084748622113416, titulo: 'Jorge e Mateus em Blumenau', descricao: 'Evento pago' },
        { lat: -26.899380272916297, lng: -49.07561841841277, titulo: '2º Medieval in Norden', descricao: 'Evento pago' },
        { lat: -26.915361510482928, lng: -49.08460813005426, titulo: 'Orquifest – Festa das Orquídeas', descricao: 'Evento pago' },
        { lat: -26.906560465834552, lng: -49.07803697423356, titulo: 'Quinta Show Tchê Garotos + San Francisco', descricao: 'Evento pago' },
        { lat: -26.918373416205345, lng: -49.06811194724816, titulo: 'Realizador De Sonhos - O musical', descricao: 'Evento pago' },
        { lat: -26.918459513702473, lng: -49.068069031904976, titulo: 'Rita Lee Experience', descricao: 'Evento pago' },
        { lat: -26.809741714048005, lng: -49.08700521841572, titulo: '2ª EDIÇÃO DO SUNSET CONTAINER', descricao: 'Evento gratuito' },
        { lat: -26.907737773699647, lng: -49.073241332088394, titulo: 'Workshop ELA', descricao: 'Evento pago' },
        
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
 