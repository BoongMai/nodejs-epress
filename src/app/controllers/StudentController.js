const Student = require('../models/Student')
const mongoose = require('mongoose');
const { mongooseToObject } = require('../../util/mongoose')


class StudentController {
    // [GET] /search
    show(req, res, next) {
        Student.findOne({ slug: req.params.slug })
        .then(student => 
            res.render('student/show', { student: mongooseToObject(student)})   
        )
        .catch(next)
    }

    // [GET] /students/create
    create(req, res, next){
        res.render('../../resources/views/student/create.hbs')
    }

    // [POST] /students/store
    store(req, res, next){
        const student = new Student(req.body);
        student.save()
            .then(() => res.redirect('/me/stored/student'))
            .catch(() => {})
    }

    edit(req, res, next){
        Student.findById(req.params.id)
        .then(
            student => res.render('student/edit', { student: mongooseToObject(student)})
        )
        .catch(next)
       
    }

    // [PUT] /student/:id
    update(req, res, next){
        Student.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/me/stored/student'))
            .catch(next)
    }

    // [DELETE] /student/:id
    destroy(req, res, next){
        Student.delete({_id: req.params.id})
            .then(() => res.redirect('back'))
            .catch(next)
    }

    // [DELETE] /student/:id/force
    forceDestroy(req, res, next){
        Student.deleteOne({_id: req.params.id})
            .then(() => res.redirect('back'))
            .catch(next)
    }

    // [DELETE] /student/:id/restore
    restore(req, res, next){
        Student.restore({_id: req.params.id})
            .then(() => res.redirect('back'))
            .catch(next)
    }
}
 
module.exports = new StudentController();
