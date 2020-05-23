window.addEventListener('load', () => {
    let long;
    let lat;
    let tempDesc = document.querySelector('.temp-desc');
    let locationTimeZone = document.querySelector('.location-timezone');
    let tempDegree = document.querySelector('.temp-degree');
    let icon = document.querySelector('.location-icon');

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;
            const api_key = 'ad38154eb6464edf80ab6b9d452f880e';
            const api = `https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${long}&key=${api_key}`;

            fetch(api)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    console.log(data);
                    //Replace Elements From API
                    tempDegree.textContent = data.data[0].temp;
                    locationTimeZone.textContent = data.data[0].city_name;
                    tempDesc.textContent = data.data[0].weather.description;
                    const iconNum = data.data[0].weather.icon;
                    const iconUrl = `https://www.weatherbit.io/static/img/icons/${iconNum}.png`;
                    console.log(iconUrl);
                    icon.style.backgroundImage = 'url(' + iconUrl + ')';
                });
        });
    } else {
        alert('Please Accept The Location Permission');
    }
});