function initMap() {
    var uluru = {lat:  53.54, lng: 27.34};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 5.6,
        center: uluru
    });
    var image = 'img/habitat-duck/map-icon.png';
    var marker = new google.maps.Marker({
        position: {lat:  52.23, lng: 24.58},
        map: map,
        title: 'Brest',
        icon: image
    });
    var marker1 = new google.maps.Marker({
        position: {lat:  52.119250, lng: 26.126318},
        map: map,
        title: 'Pinsk',
        icon: image
    });
    var marker2 = new google.maps.Marker({
        position: {lat:  55.249629, lng: 29.161998},
        map: map,
        title: 'Shumily',
        icon: image
    });
}

