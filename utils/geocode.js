const request = require('request')

const token = 'pk.eyJ1IjoiZm96dHVyayIsImEiOiJja25uMHFyZWEweG94Mm9wZXRvaG0zeGl3In0.SRKPoUursgwz66N93M_07Q'

const geocode = (address, callback) => {

    const geocodeURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURIComponent(address) + ".json?access_token=" + token

    request({url: geocodeURL, json: true}, (error, response) => {
        
        if(error){
            callback('Unable to connect to geocode api.', undefined)
        }
        else if(response.body.features.length === 0){
            callback('Unable to find '+ address + ' in mapbox.', undefined)
        }
        else{
            callback(undefined, {
                place_name : response.body.features[0].place_name,
                longtitude : response.body.features[0].center[0],
                latitude : response.body.features[0].center[1]
            })
        }
    })

}

module.exports = geocode