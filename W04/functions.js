var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello World!'
  }
});

app.message = 'Hello World! This is my first change using Vue.js';

var app2 = new Vue({
  el: '#app2',
  data: {
    message: 'This page has been loaded by you on ' + new Date().toLocaleString()
  }
});

app2.message = 'You have just encountered the second change using Vue.js';