'use strict';
 
const Student = require('../models/student');
const Activity = require('../models/activity');

 
class ActivityRepository {
    constructor() {

        this.activities = new Array(
            new Activity(1, 'Taller1', '5.0'),
            new Activity(2, 'Taller2', '5.0'),
            new Activity(3, 'Taller3', '5.0'),
            new Activity(4, 'Blog', '5.0')
        );

        this.student = new Map([
            [1, new Student('Barack Obama', '123456789', this.activities)]
        ]);

        
    }
 
    getAll() {
        return Array.from(this.student.values());
    }
 
}
 
const activityRepository = new ActivityRepository();
 
module.exports = activityRepository;