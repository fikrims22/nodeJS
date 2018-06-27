'use strict';

module.exports = function (TOOLS, MODULES, CONSTANTS) {
    let jwt = require('jsonwebtoken');

    return {
        checkToken: function(token, callback) {
            if(token) {
                jwt.verify(token, process.env.JWT_SECRET, function(err, decoded){
                    if(err) {
                        callback(err, null);
                    }else{
                        callback(null,decoded);
                    }
                });
            }else{
                return res.status(401).send({
                    success : false,
                    message : 'no token provided'
                });
            }           
        }
    }

}