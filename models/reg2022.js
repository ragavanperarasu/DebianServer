// const mongoose = require('../database/gctuser');

// const subjectSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true
//   }
// });

// const semesterSchema = new mongoose.Schema({
//   semno: {
//     type: String,
//     required: true
//   },
//   subject: [subjectSchema]
// });

// const deptSchema = new mongoose.Schema({
//   deptname: {
//     type: String,
//     required: true,
//     unique: true
//   },
//   semester: [semesterSchema]
// }, { timestamps: true });

// const reg2022 = mongoose.model('reg2022', deptSchema);

// module.exports = reg2022;


// // await DeptModel.create({
// //   deptname: "Computer Science",
// //   semester: [
// //     {
// //       semno: "Semester 1",
// //       subject: [{ name: "Mathematics" }, { name: "Physics" }]
// //     },
// //     {
// //       semno: "Semester 2",
// //       subject: [{ name: "Data Structures" }]
// //     }
// //   ]
// // });

