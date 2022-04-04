const mongoose = require('mongoose');

async function connect(){
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/quan_ly_sinh_vien', {            
        });
        console.log('successfully !!!');
    }
    catch(err){
        console.log('connect fail !!!');
    }
}

module.exports = { connect }