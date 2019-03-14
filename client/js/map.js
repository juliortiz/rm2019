function iniciar() {
    var mapOptionsSl = {
            center: new google.maps.LatLng(-12.0767886,-77.0003167),
            zoom: 16,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

    var mapa = new google.maps.Map(document.getElementById("mapa"),mapOptionsSl);

    var ubirmsl = new google.maps.LatLng(-12.0767876,-77.0003018);
    var marca1 = new google.maps.Marker({
            position: ubirmsl,
            map: mapa,
            title: 'Raul Motors'
        });

    function MostrarInfoSl() {
        var infowindow = new google.maps.InfoWindow({
            content: 'Raul Motors SL'
        });

        infowindow.open(mapa,marca1);
    }
    google.maps.event.addListener(marca1, 'click', MostrarInfoSl);

    var mapOptionsDa = {
            center: new google.maps.LatLng(-12.075886, -76.994972),
            zoom: 16,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

    var mapa2 = new google.maps.Map(document.getElementById("mapa2"),mapOptionsDa);

    var ubirmda = new google.maps.LatLng(-12.075886, -76.994972);
    var marca2 = new google.maps.Marker({
            position: ubirmda,
            map: mapa2,
            title: 'Raul Motors'
        });

    function MostrarInfoDa() {
        var infowindow = new google.maps.InfoWindow({
            content: 'Raul Motors DA'
        });

        infowindow.open(mapa2,marca2);
    }
    google.maps.event.addListener(marca2, 'click', MostrarInfoDa);
}
