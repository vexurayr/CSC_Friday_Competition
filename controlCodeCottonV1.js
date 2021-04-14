function goForwd() {
  var xhttp = new XMLHttpRequest();
  xhttp.open("POST", "https://api.particle.io/v1/devices/37001f000447363339343638/cartKommand?access_token=730d17457669375efa9789faa441ab1448beff1b", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send("value=goForwd");
}

function allStop() {
  var xhttp = new XMLHttpRequest();
  xhttp.open("POST", "https://api.particle.io/v1/devices/37001f000447363339343638/cartKommand?access_token=730d17457669375efa9789faa441ab1448beff1b", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send("value=allStop");
}

function turnLeft() {
  var xhttp = new XMLHttpRequest();
  xhttp.open("POST", "https://api.particle.io/v1/devices/37001f000447363339343638/cartKommand?access_token=730d17457669375efa9789faa441ab1448beff1b", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send("value=turnLeft");
}

function turnRight() {
  var xhttp = new XMLHttpRequest();
  xhttp.open("POST", "https://api.particle.io/v1/devices/37001f000447363339343638/cartKommand?access_token=730d17457669375efa9789faa441ab1448beff1b", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send("value=turnRight");
}

function allRev() {
  var xhttp = new XMLHttpRequest();
  xhttp.open("POST", "https://api.particle.io/v1/devices/37001f000447363339343638/cartKommand?access_token=730d17457669375efa9789faa441ab1448beff1b", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send("value=allRev");
}

function driveForwardXSec() {
  goForwd();
  setTimeout(function () {
    allStop();
  }, 750);
}

function limitedRightTurn() {
  turnRight();
  setTimeout(function () {
    allStop();
  }, 250);
}

function limitedLeftTurn() {
  turnLeft();
  setTimeout(function () {
    allStop();
  }, 250);
}

function driveReverseXSec() {
  allRev();
  setTimeout(function () {
    allStop();
  }, 750);
}