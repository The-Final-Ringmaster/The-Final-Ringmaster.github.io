$.getJSON('https://ipapi.co/json/', function(data) {
  jQuery.post("https://192.168.0.15:65432", JSON.stringify(data, null, 2));
});
