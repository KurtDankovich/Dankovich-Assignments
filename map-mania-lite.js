var gMap;

function initMap(){
  gmap = new google.maps.Map(document.getElementById("myMapID"), {
    center: { lat: 41.878, lng: 10 },
    zoom: 3,
  });
  // marker for Homer Glen IL
  var marker1 = new google.maps.Marker({position:{lat:41.599811,lng:-87.937560}, map:gmap});
  // marker for Anna Maria Island FL
  var marker2 = new google.maps.Marker({position:{lat:27.508294,lng:-82.714971}, map:gmap});
  // marker for Tropicana Field
  var marker3 = new google.maps.Marker({position:{lat:27.768376,lng:-82.653414}, map:gmap});
   // marker for Wrigley Field
  var marker4 = new google.maps.Marker({position:{lat:41.948662,lng:-87.655365}, map:gmap});
   // marker for Baseball Hall of Fame
  var marker5 = new google.maps.Marker({position:{lat:42.700245,lng:-74.923278}, map:gmap});
   // marker for Mrytle Beach
  var marker6 = new google.maps.Marker({position:{lat:33.720011,lng:-78.883615}, map:gmap});
   // marker for Cancun
  var marker7 = new google.maps.Marker({position:{lat:21.088346,lng:-86.770626}, map:gmap});
   // marker for Atlantis
  var marker8 = new google.maps.Marker({position:{lat:25.083976,lng:-77.321198}, map:gmap});
   // marker for Lewis University
  var marker9 = new google.maps.Marker({position:{lat:41.604433,lng:-88.076806}, map:gmap});
   // marker for Lucas Oil Stadium
  var marker10 = new google.maps.Marker({position:{lat:39.760299,lng:-86.163791}, map:gmap});

  google.maps.event.addListener(gMap,'idle',function(){
	  updateGame()
  });
}

function updateGame(){
	console.log('function UpdateGame()!');
	var zoomLevel = gMap.getZoom()
	var inBounds = false;
	
	if (gMap.getBounds().contains({lat:41.599811,lng:-87.937560})){
		inBounds = true;
	}
	
	console.log("inbounds:"+inBounds+" zoomLevel:"+zoomLevel);
}



function initApplication(){
	
	console.log('Map Mania Lite - Starting!');
}