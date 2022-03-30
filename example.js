//  Verifier quer la geolocalisation soit disponible

if('geolocation' in navigator){

    // getCurrentPossition() ou watchPosition()
    // success , error , options

    let options = {
        enableHighAccuracy: true,  // preciser que on veux une position geografique tres precise
        // maximumAge : 0
        // timeout       : 10000

    }
    navigator.geolocation.getCurrentPosition((position) => {
        console.log(position.coords.latitude);
        console.log(position.coords.longitude);
    }, error, options);

    function error() {
        alert('Vous avez refuse la geolocalisation');
    }

}else{
    alert('La geolocalisation ne peut pas etre utiliser')
}