String.prototype.toJadenCase = function() {
  return this.split(' ')
    .map(word => word[0].toUpperCase() + word.substr(1, word.length))
    .join(' ');
};
