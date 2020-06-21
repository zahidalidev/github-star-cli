module.exports = (loadName) => {
    var twirlTimer = (function() {
        var P = [`\x1b[92m\\ \x1b[0m${loadName}`, `\x1b[92m| \x1b[0m${loadName}`, `\x1b[92m/ \x1b[0m${loadName}`, `\x1b[92m- \x1b[0m${loadName}\n`];
        var x = 0;
        return setInterval(function() {
          process.stdout.write("\r" + P[x++]);
          x &= 3;
        }, 350);
      })();
}