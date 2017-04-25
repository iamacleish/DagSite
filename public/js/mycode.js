$(document).ready(function(){
    $(".toggleList").click(function(){
      var target = "#list" + $(this).attr("id");
      $(target).toggle();
    });
});


document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    console.log("ready");
    console.log(cordova.file);
}

function backToIndex()
{
  console.log(cordova.file.applicationDirectory+'www/index.html');
  window.location.href = cordova.file.applicationDirectory+'www/index.html';
}
