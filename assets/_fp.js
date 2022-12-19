function openNavLeft() {
document.getElementById("shopify-section-off-canvas-left").style.width = "300px";
}

function closeNavLeft() {
document.getElementById("shopify-section-off-canvas-left").style.width = "0";
}

window.addEventListener('scroll', function () {
  if(window.pageYOffset > 100) {
  	document.getElementById('fp_hamburger_top').style.visibility = "hidden";
  	document.getElementById('fp_hamburger').style.visibility = "visible";
  	document.getElementById('fp_icons_top').style.visibility = "hidden";
  	document.getElementById('fp_icons').style.visibility = "visible";
    $('#fp_header_scroll').css("background","rgba(0,0,0,0.9)");
  } else {
  	document.getElementById('fp_hamburger_top').style.visibility = "visible";
  	document.getElementById('fp_hamburger').style.visibility = "hidden";
  	document.getElementById('fp_icons_top').style.visibility = "visible";
  	document.getElementById('fp_icons').style.visibility = "hidden";
    $('#fp_header_scroll').css("background","transparent");
  }
});





