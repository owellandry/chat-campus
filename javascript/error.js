window.addEventListener('error', function () {
  var favicon = document.querySelector('link[rel="shortcut icon"]');
  favicon.href = 'img/error-favicon.png';
}); 