function goForwd() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "https://api.particle.io/v1/devices/2d003a000a47363339343638/cartKommand?access_token=730d17457669375efa9789faa441ab1448beff1b", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("value=goForwd");
  }

  function allStop() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "https://api.particle.io/v1/devices/2d003a000a47363339343638/cartKommand?access_token=730d17457669375efa9789faa441ab1448beff1b", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("value=allStop");
  }

  function turnOnB() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "https://api.particle.io/v1/devices/310036000e47353136383631/led?access_token=80c17219383160eb931780655d9984958a4414d5", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("value=onB");
  }

  function turnOffB() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "https://api.particle.io/v1/devices/310036000e47353136383631/led?access_token=80c17219383160eb931780655d9984958a4414d5", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("value=offB");
  }

  function turnOnC() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "https://api.particle.io/v1/devices/310036000e47353136383631/led?access_token=80c17219383160eb931780655d9984958a4414d5", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("value=onC");
  }

  function turnOffC() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "https://api.particle.io/v1/devices/310036000e47353136383631/led?access_token=80c17219383160eb931780655d9984958a4414d5", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("value=offC");
  }

  function turnOnD() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "https://api.particle.io/v1/devices/310036000e47353136383631/led?access_token=80c17219383160eb931780655d9984958a4414d5", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("value=onD");
  }

  function turnOffD() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "https://api.particle.io/v1/devices/310036000e47353136383631/led?access_token=80c17219383160eb931780655d9984958a4414d5", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("value=offD");
  }

  function crazy() {
    turnOffA();
    turnOffB();
    turnOffC();
    turnOffD();
    setTimeout(function() {
        turnOnD();
    }, 4000);
    setTimeout(function() {
        turnOnB();
    }, 6000);
    setTimeout(function() {
        turnOnC();
    }, 8000);
    setTimeout(function() {
        turnOnA();
    }, 10000);
    setTimeout(function() {
        turnOffD();
        turnOffA();
        turnOffB();
        turnOffC();
    }, 20000);
  }

  function allOn() {
    turnOnA();
    turnOnB();
    turnOnC();
    turnOnD();
  }