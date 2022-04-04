const Student = require('../models/Student')
const mongoose = require('mongoose');
const { mutipleMongooseToObject } = require('../../util/mongoose')

class SiteController {
    // [GET] /
    index(req, res, next) {
        Student.find({})
        .then(stu => {res.render('home', { stu: mutipleMongooseToObject(stu)})
        })
        .catch(next); 
    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
