# Create a Google Map with Navigation

Create a series of location links and add the following attributes

`data-role="location" data-latitude="51.50813" data-longitude="-0.12801"`

## Set up

Load in the js file

`<script src="mapNav.js" type="text/javascript" charset="utf-8"></script>`
    
Load the function on the element you want the map to be created - you can pass in any google maps options as well

`$(document).ready(function(){ 
  $("#map").mapNav();
});`

Define your locations in a list or your desired navigation output. Adding the url will allow the navigation to link to google maps when javascript is not enabled 

`<li><a href="http://maps.google.com/maps?q=london&hl=en&sll=37.0625,-95.677068&sspn=52.902929,78.75&vpsrc=0&hnear=London,+United+Kingdom&t=m&z=11&iwloc=A" data-role="location" data-latitude="51.50813" data-longitude="-0.12801">London</a></li>`

Define the element where you want the map to be rendered

`<div id="map"></div>`

## More Details

For more details please look at the example