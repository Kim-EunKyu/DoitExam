var path = require('path');

var directories = ['Users','Mars', 'docs'];
var dirStr = directories.join();
console.log('dir : ' +dirStr);

var dirStr2 = directories.join(path.sep)
console.log('dir2 : ' + dirStr2);

var dirStr3 = path.join('/Users/rladm' , 'notepad.exe')
console.log('dir3 : ' +dirStr3)
