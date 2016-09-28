const chai = require('chai');
const expect = chai.expect;
const dartScorer = require('../dart-scorer.js');

describe('dart scorer', function(){

  it('should be a function that accepts an array and returns a number', function() {
    expect(dartScorer).to.be.a('function');
    expect(dartScorer([1])).to.be.a('number');
  });

  it('should assign scores based on the radius of the hit point relative to the center', function(){
    expect(dartScorer([1, 5, 11])).to.be.equal(15);
    expect(dartScorer([15, 20, 30])).to.be.equal(0);
  });

  it('should award a bonus of 100 points if all radiuses are below 5', function() {
    expect(dartScorer([1, 2, 3, 4])).to.be.equal(140);
  });
});