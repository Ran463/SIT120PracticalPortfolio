function myFunction() {
  var x = document.getElementById('nav-div');
  if (x.className === 'topnav') {
    x.className += ' responsive';
  } else {
    x.className = 'topnav';
  }
}