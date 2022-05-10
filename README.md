### install
```
npm install geolocation-distance
```

### Usage
``` javascript
var geoDistance = require("geolocation-distance")


var pointA = {
  y: 126.9521767,
  x: 37.5325662
}
var pointB = {
  y: 129.0615634,
  x: 35.1423769
}

let distance = geoDistance.getDistance(pointA, pointB)
console.log(distance)
//326.05409101692806 (unit:km)
```
