function openNavLeft() {
  console.log('open');
  document.getElementById("shopify-section-off-canvas-left").style.width = "300px";
}

function closeNavLeft() {
document.getElementById("shopify-section-off-canvas-left").style.width = "0";
}

window.addEventListener('scroll', function () {

  if(window.pageYOffset > 200) { 
    $('#fp_header_scroll').css("background","rgba(0,0,0,0.9)");
  } else {
    $('#fp_header_scroll').css("background","transparent");
  }
});





