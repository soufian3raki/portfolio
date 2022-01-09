function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 39.43536, lng: -0.39234 },
        zoom: 13,
        disableDefaultUI: true,
        styles: [
            {
                elementType: "geometry",
                stylers: [{ color: "#20002b" }]
            },
            {
                elementType: "labels.text.stroke",
                stylers: [{ color: "#20002b" }]
            },
            {
                elementType: "labels.text.fill",
                stylers: [{ color: "#0d0012" }]
            },
            {
                featureType: "administrative.locality",
                elementType: "labels.text.fill",
                stylers: [{ color: "#ffffff" }],
            },
            {
                featureType: "poi",
                elementType: "labels.text.fill",
                stylers: [{ color: "#ffffff" }],
            },
            {
                featureType: "poi.park",
                elementType: "geometry",
                stylers: [{ color: "#da5fff" }],
            },
            {
                featureType: "poi.park",
                elementType: "labels.text.fill",
                stylers: [{ color: "#6b9a76" }],
            },
            {
                featureType: "road",
                elementType: "geometry",
                stylers: [{ color: "#8e00b9" }],
            },
            {
                featureType: "road",
                elementType: "geometry.stroke",
                stylers: [{ color: "#212a37" }],
            },
            {
                featureType: "road",
                elementType: "labels.text.fill",
                stylers: [{ color: "#9ca5b3" }],
            },
            {
                featureType: "road.highway",
                elementType: "geometry",
                stylers: [{ color: "#0d0012" }],
            },
            {
                featureType: "road.highway",
                elementType: "geometry.stroke",
                stylers: [{ color: "#1f2835" }],
            },
            {
                featureType: "road.highway",
                elementType: "labels.text.fill",
                stylers: [{ color: "#f3d19c" }],
            },
            {
                featureType: "transit",
                elementType: "geometry",
                stylers: [{ color: "#8e00b9" }],
            },
            {
                featureType: "transit.station",
                elementType: "labels.text.fill",
                stylers: [{ color: "#ffffff" }],
            },
            {
                featureType: "water",
                elementType: "geometry",
                stylers: [{ color: "#0b000f" }],
            },
            {
                featureType: "water",
                elementType: "labels.text.fill",
                stylers: [{ color: "#0b000f" }],
            },
            {
                featureType: "water",
                elementType: "labels.text.stroke",
                stylers: [{ color: "#0b000f" }],
            },
        ],
    }); /*39.435362416359716, -0.3923422177949837*/
    const image =
        "./img/icon.map.png";
    var marker = new google.maps.Marker({
        position: { lat: 39.435362416359716, lng: -0.3923422177949837 },
        map: map,
        icon: image,
        title: 'Acuario de Gijón'
    });
}
