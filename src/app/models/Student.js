const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongooseDelete = require('mongoose-delete');

const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const Student = new Schema(
    {
        name: { type: String },
        age: { type: String  },
        sex: { type: String},
        slug: { type: String},
        avatar: {type: String},
        info: { type: String },
        level: { type: String },
        slug: { type: String, slug: 'name', unique: true },
    }, 
    {
        timestamps: true,
    }
);

Student.plugin(mongooseDelete, { 
    overrideMethods: 'all',
    deletedAt : true
});

module.exports = mongoose.model('student', Student);
