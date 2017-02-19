
// public rule fxn
// n is rule # 1-256 (curry in)
// c is cell value (self)
// i is cell index (self)
// a is automaton (array)
module.exports = function (n, c, i, a) {

  var h = a.length;

  // left cell idx
  var li = (i - 1 < 0) ? h - 1 : i - 1;

  // right cell idx
  var ri = (i + 1) % h;

  // interpret as decimal
  var d = 4 * a[li] + 2 * c + 1 * a[ri];

  // convert to binary string
  var b = n.toString(2);

  // implicit mod 256 for n greater than 256
  if (b.length > 8) b = b.substr(b.length - 8);

  // pad high order bits w/ 0s when neccessary
  while (b.length < 8) b = '0' + b;

  // map pattern onto n
  return parseInt(b[7 - d], 2);

}
