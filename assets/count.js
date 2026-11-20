// Anonymous visit counts (GoatCounter: no cookies, no personal data, no IP
// stored) and the two numbers that make the site measurable:
//   1. how many visits each page gets            -> GoatCounter "Pages"
//   2. how many of them tap through to the store -> GoatCounter events
//      named "appstore-<page>-<n>" (n = 1 for the hero button, 2 the next)
// and, once PROVIDER_ID is set, Apple's campaign token on every App Store link,
// so App Store Connect (App Analytics > Acquisition > Campaigns) shows the
// downloads that came from each page and button.
//
// Inert until GC_CODE is filled in: nothing loads and links are untouched.
(function () {
  var GC_CODE = '';      // GoatCounter site code, e.g. 'pulsefamily' for pulsefamily.goatcounter.com
  var PROVIDER_ID = '';  // App Store Connect provider ID ("pt"), from App Analytics > Campaigns
  if (!GC_CODE) return;

  var page = location.pathname.split('/').filter(Boolean)[0] || 'home';
  var n = 0;
  document.querySelectorAll('a[href*="apps.apple.com/"]').forEach(function (a) {
    n += 1;
    var label = 'appstore-' + page + '-' + n;
    a.setAttribute('data-goatcounter-click', label);
    a.setAttribute('data-goatcounter-title', a.getAttribute('href'));
    if (PROVIDER_ID && a.href.indexOf('ct=') === -1) {
      a.href += (a.href.indexOf('?') === -1 ? '?' : '&') +
        'pt=' + encodeURIComponent(PROVIDER_ID) + '&ct=' + encodeURIComponent('site-' + page + '-' + n) + '&mt=8';
    }
  });

  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://gc.zgo.at/count.js';
  s.setAttribute('data-goatcounter', 'https://' + GC_CODE + '.goatcounter.com/count');
  document.head.appendChild(s);
})();
