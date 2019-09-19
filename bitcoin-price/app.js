var btn = document.querySelector("#btn");
var span = document.querySelector("#price");

var btn = document.querySelector("#btn");
var img = document.querySelector("#photo");

//listen for clicks
btn.addEventListener("click", function () {
  //make the request
  var XHR = new XMLHttpRequest();

  XHR.onreadystatechange = function () {
    if (XHR.readyState == 4 && XHR.status == 200) {
      var data = JSON.parse(XHR.responseText).bpi.USD.rate;
      span.innerText = data + " USD";
    }
  }

  XHR.open("GET", "https://api.coindesk.com/v1/bpi/currentprice.json");
  XHR.send();
})