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

// Copy a link to one video on /videos/ (advisors send a client the one that
// answers their question). If the clipboard is refused, put the link in the
// address bar instead so it can be copied from there.
document.querySelectorAll('.copylink[data-id]').forEach(function (btn) {
  btn.addEventListener('click', function () {
    var id = btn.getAttribute('data-id');
    var url = location.origin + location.pathname + '#' + id;
    var label = btn.textContent;
    var say = function (t) { btn.textContent = t; setTimeout(function () { btn.textContent = label; }, 2200); };
    // A clipboard request can also hang (a permission prompt nobody answers),
    // so whichever of copy, refusal or a 1.5 s timeout comes first wins.
    var done = false;
    var once = function (fn) { return function () { if (!done) { done = true; fn(); } }; };
    var fallback = once(function () { history.replaceState(null, '', '#' + id); say('Link is in the address bar'); });
    var copied = once(function () { say('Link copied'); });
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(url).then(copied, fallback);
      setTimeout(fallback, 1500);
    } else fallback();
  });
});
