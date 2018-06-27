'use strict';

module.exports = function(TOOLS, MODULES, CONSTANTS){

    const AUTHController = TOOLS.CONTROLLERS.AUTHController;
    return {
        login: function(req, res, next) {
            var token = req.headers['x-access-token'];
            if(token) {
                ValidationController.checkToken(token, function(err, result){
                    if(err){
                        return res.status(401).json({code: 401, status:'error'});
                    }else{
                        next(null, result);
                    }
                });
            }else{
                let error = {code : 400, message : 'please input token'};
                next(error, null);
            }

        }

    }

}