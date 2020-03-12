var calc2 = require('./calc_03_01');

console.log('모듈로 분리한 후 - calc2.add : ' + calc2.add(30,30))

var nconf = require('nconf') // nconf모듈 불러오기 -> npm install nconf필요
nconf.env(); // -> env함수를 호출해야 정보를 불러올 수 있다.
var value = nconf.get('OS')
console.log('OS 환경변수의 값 : ' + value);
