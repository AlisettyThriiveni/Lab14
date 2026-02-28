// type PointType = {
//   x: number;
//   y: number;
// };
var studentData = {
    students: [
        { name: "Santhosh", marks: 85 },
        { name: "Ajay", marks: 90 },
        { name: "Dharithri", marks: 78 }
    ]
};
studentData.students.forEach(function (s) {
    console.log("Name:", s.name, "Marks:", s.marks);
});