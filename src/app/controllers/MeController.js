const Student = require('../models/Student')
const mongoose = require('mongoose');
const { mutipleMongooseToObject } = require('../../util/mongoose')


class MeController {
    // [GET] /me/stored/student
    storedStudent(req, res, next) {
        Student.find({})
            .then(student => res.render('me/stored-student', { 
                student: mutipleMongooseToObject(student)
            }))
            .catch(next)
    }

    // [GET] /me/trash/student
    trashStudent(req, res, next) {
        Student.findDeleted({})
        .then(student => res.render('me/trash-stored-student', { 
            student: mutipleMongooseToObject(student)
        }))
        .catch(next)
    }
}
 
module.exports = new MeController();
