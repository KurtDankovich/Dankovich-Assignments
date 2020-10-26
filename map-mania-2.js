var favplaces = [
 {content:'<strong>#1: Homer Glen, Illinois <strong>', coordinates:{lat:41.599811,lng:-87.937560}, iconImagePath:"flag.png"},
  {content:'<strong>#2: Anna Maria Island, Florida <strong>', coordinates:{lat:27.508294,lng:-82.714971}, iconImagePath:"flag.png"},
  {content:'#3. Tropicana Field, Florida', coordinates:{lat:27.768376,lng:-82.653414}, iconImagePath:"flag.png"},
  {content:'#4. Wrigley Field, Illinois', coordinates:{lat:41.948662,lng:-87.655365}, iconImagePath:"flag.png"},
  {content:'#5. Baseball Hall of Fame, New York', coordinates:{lat:42.700245,lng:-74.923278}, iconImagePath:"flag.png"},
  {content:'#6. Mrytle Beach, South Carolina', coordinates:{lat:33.720011,lng:-78.883615}, iconImagePath:"flag.png"},
  {content:'#7. Cancun, Mexico', coordinates:{lat:21.088346,lng:-86.770626}, iconImagePath:"flag.png"},
  {content:'#8. Atlantis, Bahamas', coordinates:{lat:25.083976,lng:-77.321198}, iconImagePath:"flag.png"},
  {content:'#9. Lewis University, Illinois', coordinates:{lat:41.604433,lng:-88.076806}, iconImagePath:"flag.png"},
  {content:'#10. Lucas Oil Stadium, Indiana', coordinates:{lat:39.760299,lng:-86.163791}, iconImagePath:"flag.png"},

]

function initGS() {
  window.alert("Welcome to Kurt's Map Mania! \n Click on Instructions");
}

var currentPlaceIndex = favplaces.length-1;
var currentPlace = favplaces[currentPlaceIndex];
var score = 0;
var hint = "";

function initMap() {
console.log('Map Mania V2 - Starting up...');

  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 41.878, lng: 10 },
    zoom: 3,
  });

  google.maps.event.addListener(map, 'idle', function() {
    updateGame()
});

  SetScore(score);
  SetHint("");

}

function updateGame() {
  var zoomLevel = map.getZoom();
  console.log("Zoom level: " + zoomLevel);
  var inBounds = false;

  if (map.getBounds().contains(currentPlace.coordinates)) {
    inBounds = true;
    console.log("You are inbounds!");
  }

  if ((zoomLevel >= 10) && (inBounds)) {
    console.log("You found it! Find Another!");
    addMarker(currentPlace);
    SetScore(score += 10);
    nextLocation();
  }
}

function nextLocation() {
  currentPlaceIndex--;
  currentPlace = favplaces[currentPlaceIndex];

  
   if (currentPlace == favplaces[9]) {
    SetHint("Colts play here")
  }
  else if (currentPlace == favplaces[8]) {
    SetHint("We do alot of homework for this school")
  }
  else if (currentPlace == favplaces[7]) {
    SetHint("Lost city of ____")
  }
  else if (currentPlace == favplaces[6]) {
    SetHint("Common tourist spot in Mexico")
  }
  else if (currentPlace == favplaces[5]) {
    SetHint("Cal Ripken owns a baseball faciltiy here")
  }
  else if (currentPlace == favplaces[4]) {
    SetHint("Where great baseball players get the best honor")
  }
  else if (currentPlace == favplaces[3]) {
    SetHint("Chicago White Sox enemy")
  }
  else if (currentPlace == favplaces[2]) {
    SetHint("They are in the world series at the moment")
  }
  else if (currentPlace == favplaces[1]) {
    SetHint("Favorite warm weather place, think Gulf of Mexico")
  }
  else if (currentPlace == favplaces[0]) {
    SetHint("Main character in the Simpsons + Peter's friend who wears tropical shirts")
  }
  else if (currentPlace == favplaces[-1]) {
    window.alert("Congratulations you have won!");
  }
}

function addMarker(markerC) {
  
  var marker = new google.maps.Marker(
    {position:markerC.coordinates, map:map}
  );
  
  if (markerC.iconImagePath) {
      marker.setIcon(markerC.iconImagePath);
  }

  if (markerC.content) {
      var infoWindow = new google.maps.InfoWindow({"content":markerC.content});
      marker.addListener("click", function() { infoWindow.open(map, marker) });
  }
}

function SetScore(score) {
  document.getElementById("score-id").value = score;  
}

function SetHint(hint) {
  document.getElementById("hint-id").value = hint;  
}

function cheat() {
  window.alert("Pretty Bogus to Cheat");
}