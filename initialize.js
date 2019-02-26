console.log("Initialize");
// to autoresize iframes
function resizeIframe(obj) {
  obj.style.height = obj.contentWindow.document.body.scrollHeight + 'px';
  obj.style.width = obj.contentWindow.document.body.scrollWidth + 'px';
}
// get the url parameters
var url_string = window.location.href;
var url = new URL(url_string);
// This section reads in the various commands and pops them on the storage stack
// Reactor start time
console.log("Start parameter is: " + url.searchParams.get("Start"));
if (url.searchParams.get("Start") !== null) {
  reactorStart = url.searchParams.get("Start");
  console.log("Reactor Start Time: " + url.searchParams.get("Start"));
  var hms = reactorStart;   // your input string
  var a = hms.split(':'); // split it at the colons

  // minutes are worth 60 seconds. Hours are worth 60 minutes.
  var seconds = (+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2]);
  console.log(seconds);
  localStorage.setItem("reactorStart", seconds );
}
// Control commands
if (url.searchParams.get("Control") !== null) {
  controlList = url.searchParams.get("Control");
  console.log("Control list is: " + controlList);
  //3:08,pause;3:15,play;3:20,pause;3:30,play
  //localStorage.setItem("reactorVOL", reactorVOL );
}
// split the control list to pairs, then single items and store
// in the sessionStorage as <hh:mm:ss>:<command> key:pair
  var commandPairs = controlList.split(";");
  var j;
  for (j=0;j<commandPairs.length;J++) {
    console.log("command pairs are: " + commandPairs[j]);
  }


// default volume
var reactorVOL = 50;
if (url.searchParams.get("reactorVOL") !== null) {
  reactorVOL = url.searchParams.get("reactorVOL");
  localStorage.setItem("reactorVOL", reactorVOL );
}
var YTtalentVOL = 50;
// Youtube talent video
if (url.searchParams.get("YTtalentVOL") !== null) {
  console.log("inside YTtalentVOL search param and add to local Storage")
  YTtalentVOL = url.searchParams.get("YTtalentVOL");
  localStorage.setItem("YTtalentVOL", YTtalentVOL );
}
// DailyMotion talent video
console.log("DMtalentVOL is: " + url.searchParams.get("DMtalentVOL"));
var DMtalentVOL = 50;
if (url.searchParams.get("DMtalentVOL") !== null) {
  talentVOL = url.searchParams.get("DMtalentVOL");
}

console.log("starting reactor volume is: " + reactorVOL);
console.log("starting Youtube talent volume is: " + YTtalentVOL);
console.log("starting DailyMotion talent volume is: " + DMtalentVOL);
// This part provides talentVideoIDString used in the combined.js loaded in this index.html.
function getVideoIdFromURL(url) {
  console.log("Function url is: " + url);
  delimiter = '=',
  start = 1,
  tokens = url.split(delimiter).slice(start),
  result = tokens.join(delimiter); // those.that
  console.log("Function url pathname is: " + result);
  return result;
}
  if (url.searchParams.get("reactor") !== null){
    var reactorVideoURL = url.searchParams.get("reactor");
  }
  if (url.searchParams.get("YTtalent") !== null) {
    var YTtalentVideoURL = url.searchParams.get("YTtalent");
  }
  if (url.searchParams.get("DMtalent") !== null){
    var DMtalentVideoURL = url.searchParams.get("DMtalent");
  }
  if (reactorVideoURL){
    var reactorVideoID = getVideoIdFromURL(reactorVideoURL);
  }
  if (YTtalentVideoURL){
    var YTtalentVideoID = getVideoIdFromURL(YTtalentVideoURL);
  }
  if (DMtalentVideoURL ){
    var DMtalentVideoID = getVideoIdFromURL(DMtalentVideoURL);
  }

  // These are the two vars we need to use as the videoId for YT.Player objects
  var reactorVideoIDString = new String(reactorVideoID);
  var YTtalentVideoIDString = new String(YTtalentVideoID);
  var DMtalentVideoIDString = new String(DMtalentVideoID);
  // Save to local Storage
  localStorage.setItem("reactorVideoID", reactorVideoIDString );
  localStorage.setItem("YTtalentVideoID", YTtalentVideoIDString );
  localStorage.setItem("DMtalentVideoID", DMtalentVideoIDString );
  console.log("Index: YTtalentVideoURL: " + YTtalentVideoIDString);
  console.log("Index: DMtalentVideoID: " + DMtalentVideoIDString);
  console.log("Index: reactorVideoID: " + reactorVideoIDString);
  console.log("Storage Length is: " + localStorage.length);
  console.log("****************************************************")
  var i;
  for (i = 0; i < localStorage.length; i++) {
    console.log("storage #" + i + "is: " + localStorage.key(i));
  }
  // console.log("talentVideoURL: " + talentVideoURL);
