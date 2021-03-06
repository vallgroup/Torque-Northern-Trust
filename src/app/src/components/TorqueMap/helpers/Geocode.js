export default class Geocode {
  // static geocoder = null;

  constructor(google) {
    console.log(google)
    this.geocoder = google.maps.Geocoder();
    // if (!this.geocoder) {
    // }

    this.params = {};
  }

  geocode(params) {
    // if no params exit
    if (!params) {
      return;
    }
    // return if the required properties are not
    // present in the params object
    if (!params.address && !params.components) {
      return;
    }
    // save our params to the class
    this.params = params;
    // build and return our Premise
    const response = new Promise(this.handleGeocodePromise.bind(this));
    return response;
  }

  handleGeocodePromise(resolve, reject) {
    // do geocode
    this.geocoder.geocode(this.params, (results, status) => {
      try {
        // successful, resove the promise
        if (status === 'OK') {
          // pass the lat and lng coordinates
          return resolve({
            lat: results[0].geometry.location.lat(),
            lng: results[0].geometry.location.lng(),
            address: results[0].formatted_address,
          });
        }

        throw Error(`Geocode failed with status: ${status}`);
      } catch (err) {
        console.warn(err);
        reject(status);
      }
    });
  }
}
