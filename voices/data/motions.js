/* Voices of the Ladder: figure diagrams for the rungs' motions, drawn like an airplane safety card.
   Each motion is two numbered panels: a simple figure, with orange arrows and marks for the movement.
   A pose gives each arm as an elbow and a hand, in a 120 x 120 box; the shoulders, head, and body are the same
   in every panel. VOICES.motionSvg(pose) draws one panel. */
window.VOICES = window.VOICES || { characters: {}, scripts: {}, sources: {}, credits: {} };

(function () {
  'use strict';
  var INK = '#2b251b', BODY = '#8a7c66', PAPER = '#f6efe0', ACCENT = '#c0661a', RAIL = '#d9cbb0';
  var SHOULDER = { l: [43, 62], r: [77, 62] };

  function f(n) { return Math.round(n * 10) / 10; }
  // A stroke with a paper-colored edge beneath it, so it reads where it crosses the body or another arm
  function edged(d, width, color) {
    return '<path d="' + d + '" fill="none" stroke="' + PAPER + '" stroke-width="' + (width + 5) + '" stroke-linecap="round" stroke-linejoin="round"/>' +
      '<path d="' + d + '" fill="none" stroke="' + color + '" stroke-width="' + width + '" stroke-linecap="round" stroke-linejoin="round"/>';
  }
  function arm(side, a, fist) {
    var s = SHOULDER[side], e = a[0], h = a[1];
    var r = fist ? 7 : 5.4;
    return edged('M' + s + 'L' + e + 'L' + h, 9, INK) +
      '<circle cx="' + h[0] + '" cy="' + h[1] + '" r="' + (r + 2.5) + '" fill="' + PAPER + '"/>' +
      '<circle cx="' + h[0] + '" cy="' + h[1] + '" r="' + r + '" fill="' + INK + '"/>' +
      (fist ? '<path d="M' + (h[0] - 3.5) + ',' + (h[1] - 1.5) + 'h7M' + (h[0] - 3.5) + ',' + (h[1] + 2) + 'h7" stroke="' + PAPER + '" stroke-width="1.2" stroke-linecap="round"/>' : '');
  }
  var FACES = {
    surprised: '<circle cx="54.5" cy="30" r="1.9"/><circle cx="65.5" cy="30" r="1.9"/><ellipse cx="60" cy="39" rx="2.8" ry="3.6"/>' +
      '<path d="M50.5,25q3.5,-3.5 7.5,-0.5M62,24.5q4,-3 7.5,0.5" fill="none" stroke="' + PAPER + '" stroke-width="1.6" stroke-linecap="round"/>',
    angry: '<circle cx="54.5" cy="31.5" r="1.8"/><circle cx="65.5" cy="31.5" r="1.8"/>' +
      '<path d="M50.5,25.5L58,28.5M69.5,25.5L62,28.5M54.5,41.5q5.5,-4.5 11,0" fill="none" stroke="' + PAPER + '" stroke-width="1.8" stroke-linecap="round"/>',
    smile: '<circle cx="54.5" cy="30.5" r="1.8"/><circle cx="65.5" cy="30.5" r="1.8"/>' +
      '<path d="M54,36.5q6,5.5 12,0" fill="none" stroke="' + PAPER + '" stroke-width="1.8" stroke-linecap="round"/>',
    calm: '<path d="M51.5,30.5q3,2.5 6,0M62.5,30.5q3,2.5 6,0M54.5,37q5.5,4.5 11,0" fill="none" stroke="' + PAPER + '" stroke-width="1.7" stroke-linecap="round"/>',
    neutral: '<circle cx="54.5" cy="30.5" r="1.8"/><circle cx="65.5" cy="30.5" r="1.8"/>' +
      '<path d="M55.5,38.5h9" fill="none" stroke="' + PAPER + '" stroke-width="1.8" stroke-linecap="round"/>'
  };

  // Orange marks for the movement, each with a paper edge so it reads over the figure
  function head(x, y, dx, dy) {
    var len = Math.sqrt(dx * dx + dy * dy) || 1, ux = dx / len, uy = dy / len, s = 5.2;
    var bx = x - ux * s, by = y - uy * s, px = -uy * s * 0.62, py = ux * s * 0.62;
    return 'M' + f(x + ux * 1.5) + ',' + f(y + uy * 1.5) + 'L' + f(bx + px) + ',' + f(by + py) + 'L' + f(bx - px) + ',' + f(by - py) + 'Z';
  }
  function mark(d, fill) {
    return '<path d="' + d + '" fill="none" stroke="' + PAPER + '" stroke-width="6.5" stroke-linecap="round" stroke-linejoin="round"/>' +
      (fill ? '<path d="' + fill + '" fill="' + PAPER + '" stroke="' + PAPER + '" stroke-width="4" stroke-linejoin="round"/>' : '') +
      '<path d="' + d + '" fill="none" stroke="' + ACCENT + '" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>' +
      (fill ? '<path d="' + fill + '" fill="' + ACCENT + '"/>' : '');
  }
  var M = {
    arrow: function (x1, y1, x2, y2) { return mark('M' + x1 + ',' + y1 + 'L' + x2 + ',' + y2, head(x2, y2, x2 - x1, y2 - y1)); },
    curve: function (x1, y1, cx, cy, x2, y2) { return mark('M' + x1 + ',' + y1 + 'Q' + cx + ',' + cy + ' ' + x2 + ',' + y2, head(x2, y2, x2 - cx, y2 - cy)); },
    lines: function (d) { return mark(d); },
    chevrons: function (x, y, dir, n) {
      var d = '';
      for (var i = 0; i < n; i++) { var yy = y + i * 9 * dir; d += 'M' + (x - 6) + ',' + (yy - 3 * dir) + 'L' + x + ',' + (yy + 4 * dir) + 'L' + (x + 6) + ',' + (yy - 3 * dir); }
      return mark(d);
    },
    heart: function (x, y, s) {
      var d = 'M' + x + ',' + (y + 5 * s) + 'C' + (x - 7 * s) + ',' + y + ' ' + (x - 5 * s) + ',' + (y - 5 * s) + ' ' + x + ',' + (y - 2 * s) +
        'C' + (x + 5 * s) + ',' + (y - 5 * s) + ' ' + (x + 7 * s) + ',' + y + ' ' + x + ',' + (y + 5 * s) + 'Z';
      return '<path d="' + d + '" fill="' + ACCENT + '" stroke="' + PAPER + '" stroke-width="2.5" paint-order="stroke" stroke-linejoin="round"/>';
    }
  };
  function ladder() {
    var d = 'M30,0V120M90,0V120';
    for (var y = 10; y < 120; y += 16) d += 'M30,' + y + 'H90';
    return '<path d="' + d + '" stroke="' + RAIL + '" stroke-width="3.5" stroke-linecap="round"/>';
  }

  VOICES.motionSvg = function (pose) {
    var front = pose.front || 'l', back = front === 'l' ? 'r' : 'l';
    return '<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
      (pose.ladder ? ladder() : '') +
      '<path d="M35,66C35,57 46,52 60,52C74,52 85,57 85,66L91,121L29,121Z" fill="' + BODY + '"/>' +
      '<circle cx="60" cy="32" r="14" fill="' + INK + '"/>' +
      (pose.face ? '<g fill="' + PAPER + '">' + FACES[pose.face] + '</g>' : '') +
      arm(back, pose[back], pose.fists) + arm(front, pose[front], pose.fists) +
      (pose.marks || []).join('') +
      '</svg>';
  };

  // Two panels for each motion, with a few words for each
  VOICES.motions = {
    jacob: { k2: [
      { say: 'Hands on your cheeks', face: 'surprised', l: [[30, 80], [44.5, 41]], r: [[90, 80], [75.5, 41]],
        marks: [M.lines('M60,11V5M47,14L43,10M73,14L77,10')] },
      { say: 'Arms wide: here!', face: 'smile', l: [[27, 52], [13, 37]], r: [[93, 52], [107, 37]],
        marks: [M.curve(37, 47, 25, 30, 14, 25), M.curve(83, 47, 95, 30, 106, 25)] } ] },
    esau: { k2: [
      { say: 'Arms crossed. Grr!', face: 'angry', front: 'l', l: [[35, 86], [73, 80]], r: [[85, 92], [47, 88]],
        marks: [M.lines('M47,12L52,7L55,13L60,6L63,13L68,7L73,12')] },
      { say: 'Open wide: big hug!', face: 'smile', l: [[24, 68], [13, 50]], r: [[96, 68], [107, 50]],
        marks: [M.curve(9, 40, 10, 20, 30, 14), M.curve(111, 40, 110, 20, 90, 14), M.heart(60, 8, 1)] } ] },
    rebekah: { k2: [
      { say: 'Give yourself a hug', face: 'calm', front: 'r', l: [[41, 96], [77, 67]], r: [[79, 96], [43, 67]],
        marks: [M.heart(94, 34, 1), M.heart(27, 38, 0.75)] },
      { say: 'Wave goodbye', face: 'smile', l: [[33, 88], [33, 108]], r: [[95, 58], [97, 29]],
        marks: [M.lines('M86,21Q81,29 86,37M108,21Q113,29 108,37')] } ] },
    angel: { k2: [
      { say: 'Climb up, up, up', face: 'smile', ladder: true, l: [[27, 38], [40, 10]], r: [[95, 52], [80, 26]],
        marks: [M.chevrons(109, 40, -1, 3)] },
      { say: 'Then down, down, down', face: 'smile', ladder: true, l: [[26, 84], [40, 58]], r: [[94, 98], [80, 74]],
        marks: [M.chevrons(109, 22, 1, 3)] } ] },
    stone: { k2: [
      { say: 'Make two fists', face: 'neutral', fists: true, l: [[29, 94], [37, 74]], r: [[91, 94], [83, 74]],
        marks: [M.arrow(10, 74, 24, 74), M.arrow(110, 74, 96, 74)] },
      { say: 'Press them into one', face: 'smile', fists: true, l: [[31, 96], [54, 76]], r: [[89, 96], [66, 76]],
        marks: [M.lines('M60,63V57M50,65L46,61M70,65L74,61')] } ] }
  };
})();
