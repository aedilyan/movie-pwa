import React from 'react';

function Location() {

    const onClick = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        }


        function showPosition(position) {
            alert("Latitude: " + position.coords.latitude + " Longitude: " + position.coords.longitude)
        }
    }


    return (
        <button className="add-button2" onClick={onClick}>Get geo location</button>
    );
}

export default Location;
