/**
* Says hello to a person.
*
* @param name Name of the person to greet.
*/

var awscred = require('awscred');
var extract = function(callback) {

    awscred.load({profile:'project-texas'},function(err, data) {
        if (err) throw err;
        callback(data.credentials);
    })
};
 
// Allows us to call this function from outside of the library file.
// Without this, the function would be private to this file.
exports.extract = extract;