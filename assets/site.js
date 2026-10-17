// Tap-to-play: nothing downloads until the visitor asks for it.
document.querySelectorAll('.vid[data-src]').forEach(function (box) {
  var btn = box.querySelector('button');
  if (!btn) return;
  btn.addEventListener('click', function () {
    var v = document.createElement('video');
    v.src = box.getAttribute('data-src');
    v.controls = true;
    v.playsInline = true;
    v.setAttribute('playsinline', '');
    v.poster = box.querySelector('img') ? box.querySelector('img').src : '';
    box.innerHTML = '';
    box.appendChild(v);
    var p = v.play();
    if (p && p.catch) p.catch(function () {});
  });
});
