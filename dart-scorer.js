module.exports = function(scoreArray) {
  if(scoreArray.length < 1) {
    return 0;
  }
  var result = 0;

  var radiusToValues = scoreArray.map(function(radius) {
    if(radius > 10) {
      return 0;
    } else if(radius < 5) {
      return 10;
    }
    return 5;
  });

  result = radiusToValues.reduce(function(prev, curr) {
    return prev + curr;
  }, 0);

  if(scoreArray.every(function(radius) {
    return radius < 5;
  })) {
    result += 100;
  }

  return result;
};