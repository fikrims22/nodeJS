'use strict';

module.exports = function (TOOLS, MODULES, CONSTANTS) {
    
    //deklarasikan CRUDService disini
    const CRUDService = TOOLS.SERVICES.CRUDService;

    return {
        // add controller getList here
        getList: function(model, callback) {
            CRUDService.findAll(model, function(err, result){
                if(err) {
                    callback(err, null);
                }else{
                    if(!result) {
                        callback(null, {code:400, message: 'data not found'}, true);
                    }else{
                        callback(null, {result : result}, true);
                    }
                }
            });
        },

        // add controller getOne here
        getById: function(model, id, callback) {
            CRUDService.findById(model, id, function(err, result){
                if(err) {
                    callback(err, null);
                }else {
                    if(!result) {
                        callback(null, {code:404, message: 'data not found'}, true);
                    }else{
                        callback(null, {result : result}, true);
                    }
                }
            });
        },

        // add controller create here
        create: function(model, data, callback) {
            CRUDService.create(model, data, function(err, result){
                if(err) {
                    callback(err, null)
                }else{
                    if(!result) {
                        callback(null, {code: 400, message: 'data failed to create'}, true);
                    }else {
                        callback(null, {result : result}, true);
                    }
                }
            });
        },

        // add controller update here
        update: function(model, id, data, callback) {
            CRUDService.update(model, id, data, function(err, result){
                if(err) {
                    callback(null, {code: 400, message: 'data failde to udpate'}, true);
                }else{
                    callback(null, {message: 'update succes'}, true);
                }
            });
        },

        // add controller delete here
        delete: function(model, id, callback) {
            CRUDService.delete(model, id, function(err, result){
                if(err) {
                    callback(null,{code: 400, message: 'id not found'}, true);
                }else{
                    callback(null, {message: 'delete success'}, true);
                }
            });
        },

        findOne: function(model, email, password, next) {
            CRUDService.findOne(model, email, function(err, result){
                if(err) {
                    callback(err, null);
                }else{
                    if(!result) {
                        callback(null, {code: 400 })
                    }
                }
            });
        }
    };
};
