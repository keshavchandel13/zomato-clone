const loc=navigator.geolocation.getCurrentPosition(successCallback);
function successCallback(position){
    const latitude=position.coords.latitude;
    const longitude=position.coords.longitude;
    console.log("Latitude",latitude);
    console.log("Longitude",longitude);

}