/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
  var w = document.documentElement.clientWidth || window.innerWidth;
  if (w <= 1000) {
    // Probably mobile
    document.getElementById("mySidenav").style.width = "100%";
    document.getElementById("navbut").style.visibility= "hidden";
    document.getElementById('mySidenav').style.textAlign = "center";
  } else {
    // Probably desktop
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("navbut").style.visibility= "hidden";
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById('mySidenav').style.textAlign = "left";
  }
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("navbut").style.visibility= "visible";
  document.getElementById("main").style.marginLeft = "0";
}

