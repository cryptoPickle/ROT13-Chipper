function rot13(str) { 
    return str.toUpperCase().split("")
      .map(x => x.charCodeAt(0)) 
      .map(x => (x < 65 || x > 90) ? x : x-13 < 65 ? x + 13 : x -13)
      .map(x => String.fromCharCode(x)).join('')
}

module.exports = rot13;
