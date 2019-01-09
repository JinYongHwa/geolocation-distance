var main = function() {
  var _this = this;
  this.rad2deg = function(rad) {
    return (rad * 180 / Math.PI);
  }

  this.deg2rad = function(deg) {
    return (deg * Math.PI / 180.0);
  }
  this.getDistance = function(posA, posB) {
    var lat1 = posA.x || posA.lat;
    var lat2 = posB.x || posB.lat;

    var lon1 = posA.y || posA.lng || posA.lon;
    var lon2 = posB.y || posB.lng || posB.lon;

    var theta = lon1 - lon2;
    var dist = Math.sin(this.deg2rad(lat1)) * Math.sin(this.deg2rad(lat2)) + Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) * Math.cos(this.deg2rad(theta));

    dist = Math.acos(dist);
    dist = _this.rad2deg(dist);
    dist = dist * 60 * 1.1515;
    dist = dist * 1.609344;
    return dist;
  }
  this.dms2dec = function(lat, latRef, lng, lngRef) {
    console.log(typeof lat);
    var ref = {
      "N": 1,
      "E": 1,
      "S": -1,
      "W": -1
    };
    var latArr = [];
    var lngArr = [];

    lat.forEach(function(value) {
      latArr.push(value);
    })
    lng.forEach(function(value) {
      lngArr.push(value);
    })

    var convertLat = (latArr[0] + (latArr[1] / 60) + (latArr[2] / 3600)) * ref[latRef];
    var convertLng = (lngArr[0] + (lngArr[1] / 60) + (lngArr[2] / 3600)) * ref[lngRef];

    return {
      lat: convertLat,
      lng: convertLng,
    }

  }

}

module.exports = new main();