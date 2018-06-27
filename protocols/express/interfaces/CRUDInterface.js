/**
 * Created by rakhmatullahyoga on 29/09/17.
 */

'use strict';

module.exports = function (TOOLS, MODULES, CONSTANTS) {
    
    // Deklarasikan crud controller disini
    const CRUDController = TOOLS.CONTROLLERS.CRUDController;
    const model = 'user';
    return {

        // add interface get list here
        getList: function(previousData, req, res, next) {
            // var model = req.query.model;
            if(!model) {
                let error = {code:400, message: 'Please input model'}
                next(error, null);
            }else{
                CRUDController.getList(model, next);
            }
        },

        // add interface get list by id here
        getById: function(previousData, req, res, next) {
            // var model = req.query.model;
            if(!model) {
                let error = {code:400, message: 'Please input model'}
                next(error, null);
            }else{
                var id = req.params.id;
                CRUDController.getById(model, id, next);
            }
        },


        // add interface post/create here
        create: function(previousData, req, res, next) {
            // var model = req.query.model;
            if(!model) {
                let error = {code:400, message: 'Please input model!'}
                next(error, null);
            }else{
                var data = req.body;
                CRUDController.create(model, data, next);
            }
        },

        // add interface update here
        update: function(previousData, req, res, next) {
            // var model = req.query.model;
            if(!model) {
                let error = {code:400, message: 'Please input model'}
                next(error, null);
            }else{
                var id = req.params.id;
                var data = req.body;
                CRUDController.update(model, id, data, next); 
            }
        },

        // add interface delete here
        delete: function(previousData, req, res, next) {
            // var model = req.query.model;
            if(!model) {
                let error = {code:400, message: 'Please input model'}
                next(error, null);
            }else{
                var id = req.params.id;
                CRUDController.delete(model, id, next);
            }
        },

        findOne: function(previousData, req, res, next) {
            if(!model) {
                let error = {code:400, message: 'Please input token'}
                next(error, null);
            }else {
                var data = req.body.username;
                var password = req.body.password; 
                CRUDController.findOne(model, data, password, next);
            }
        }
    
    };
};
