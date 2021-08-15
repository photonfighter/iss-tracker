var mymap = L.map('map').setView([51.505, -0.09], 13);
        console.log(mymap);
        L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox/streets-v11',
            tileSize: 512,
            zoomOffset: -1,
            accessToken: 'pk.eyJ1IjoiY2FkZXRkYXZpczEyIiwiYSI6ImNrc2RqejdoYjByZnozMHA0N3pzZGd5ZHoifQ.dUIqQwYS4Eht1nopOJPO8g'
        }).addTo(mymap);

