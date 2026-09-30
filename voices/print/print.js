/* Shared helpers for the printables: elements, medallions, QR codes, and small drawings.
   The printables read the same data as the tool (../data/characters.js and ../data/portraits.js), so a changed rung
   or a new portrait shows up here too. */
(function () {
  'use strict';
  var V = window.VOICES;

  // Portrait paths in portraits.js are relative to voices/; these pages live one folder down
  Object.keys(V.portraits || {}).forEach(function (id) {
    if (V.characters[id]) V.characters[id].portrait = '../' + V.portraits[id];
  });

  function add(node, kid) {
    if (kid == null || kid === false) return;
    if (Array.isArray(kid)) { kid.forEach(function (k) { add(node, k); }); return; }
    node.appendChild(typeof kid === 'string' ? document.createTextNode(kid) : kid);
  }
  function el(tag, props) {
    var node = document.createElement(tag);
    Object.keys(props || {}).forEach(function (k) {
      var v = props[k];
      if (v == null || v === false) return;
      if (k === 'class') node.className = v;
      else if (k === 'html') node.innerHTML = v;
      else if (k === 'text') node.textContent = v;
      else if (k === 'style') Object.keys(v).forEach(function (s) { node.style.setProperty(s, v[s]); });
      else node.setAttribute(k, v === true ? '' : v);
    });
    for (var i = 2; i < arguments.length; i++) add(node, arguments[i]);
    return node;
  }
  function roleFor(c, lv) { return (lv && c.role[lv]) || c.role.all || ''; }
  function medal(c, size) {
    return el('div', { class: 'medal', style: { '--size': size || '0.8in', '--room': c.color.room, '--room-2': c.color.room2, '--accent': c.color.accent } },
      c.portrait ? el('img', { src: c.portrait, alt: c.name }) : el('span', { class: 'medal-he', lang: 'he', dir: 'rtl', text: c.he }));
  }
  function qr(key) {
    var box = el('div', { class: 'qr' });
    box.innerHTML = window.PRINT_QR[key].svg;
    return box;
  }
  function svg(markup, cls) {
    var box = el('span', { class: cls || '' });
    box.innerHTML = markup;
    return box.firstChild;
  }
  // A small ladder, drawn with rails and five rungs
  function ladderMark(color) {
    var c = color || 'currentColor', rungs = '';
    for (var i = 0; i < 5; i++) rungs += '<path d="M5 ' + (6 + i * 7) + 'h12"/>';
    return svg('<svg class="ladder-mark" viewBox="0 0 22 40" fill="none" stroke="' + c + '" stroke-width="1.6" stroke-linecap="round" aria-hidden="true">' +
      '<path d="M5 2v36M17 2v36"/>' + rungs + '</svg>');
  }
  // The open book on the tool's source buttons
  var BOOK = '<svg viewBox="0 0 24 24" width="10" height="10" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" aria-hidden="true"><path d="M4 3h6a3 3 0 0 1 3 3v14a2 2 0 0 0-2-2H4z"/><path d="M20 3h-6a3 3 0 0 0-3 3v14a2 2 0 0 1 2-2h7z"/></svg>';

  // Portraits are 1200 px for the screen; a printed medallion needs far fewer. tools/print_pdfs.mjs calls this
  // before making a PDF, so the files stay small enough to email.
  function shrinkPortraits(px) {
    return Promise.all([].map.call(document.querySelectorAll('.medal img'), function (img) {
      return img.decode().then(function () {
        var c = document.createElement('canvas');
        c.width = c.height = px || 360;
        c.getContext('2d').drawImage(img, 0, 0, c.width, c.height);
        img.src = c.toDataURL('image/jpeg', 0.9);
        return img.decode();
      });
    }));
  }

  window.P = { V: V, el: el, roleFor: roleFor, medal: medal, qr: qr, svg: svg, ladderMark: ladderMark, BOOK: BOOK, shrinkPortraits: shrinkPortraits };
})();
