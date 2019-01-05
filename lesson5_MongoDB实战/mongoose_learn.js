var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/students');

// 三步走，
var Schema = mongoose.Schema;
var profile = new Schema({
    name: String,
    gender: String
});
mongoose.model('Student', profile);

// 正式交往

// 增加数据
// var Student = mongoose.model('Student');
// var student = new Student();
//
// student.name = 'Maybe';
// student.gender = 'female';
//
// student.save(function (err) {
//     if(err){
//         console.log(err);
//         return;
//     }else{
//         console.log('Student is saved');
//         mongoose.disconnect();
//     }
// })

// 查询数据
// var Student = mongoose.model('Student');
// Student.find({}, function (err, students) {
//     console.log(students);
// })

// 更改数据
// var Student = mongoose.model('Student');
// Student.update({_id: '5c305a0371800c33442dd789'},{gender: 'man'}, {multi: false}, function (err, row_updated) {
//     if(err){
//         console.log(err);
//         return;
//     }else{
//         console.log(row_updated);
//     }
// })

// 删除数据
var Student = mongoose.model('Student');
Student.findById('5c305a0371800c33442dd789', function (err, student) {
    student.remove();
})