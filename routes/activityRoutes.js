'use strict';
 
const Router = require('express');
const activityRepository = require('../repository/activityRepository');
 
const getActivityRoutes = (app) => {
    const router = new Router();
 
    router
        .get('/all', (req, res) => {
            const result = activityRepository.getAll();
            res.send(result);
        });
 
    app.use('/activity', router);
};
 
module.exports = getActivityRoutes;
