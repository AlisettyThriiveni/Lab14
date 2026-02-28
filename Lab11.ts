// type PointType = {
//   x: number;
//   y: number;
// };

// // Interface
// interface PointInterface {
//   x: number;
//   y: number;
// }

// // Function accepts both Type and Interface
// function printPoint(p: PointType | PointInterface): void {
//   console.log("x =", p.x);
//   console.log("y =", p.y);
// }

// /*
// Difference:
// - type is used to create custom types (union, intersection, primitives).
// - interface is mainly used for object structure and can be extended easily.
// */

// // Example
// let pt1: PointType = { x: 10, y: 20 };
// let pt2: PointInterface = { x: 5, y: 15 };

// printPoint(pt1);
// printPoint(pt2);
type Student = {
  name: string;
  marks: number;
};

type StudentList = {
  students: Student[];
};

let studentData: StudentList = {
  students: [
    { name: "Santhosh", marks: 85 },
    { name: "Ajay", marks: 90 },
    { name: "Dharithri", marks: 78 }
  ]
};

studentData.students.forEach((s) => {
  console.log("Name:", s.name, "Marks:", s.marks);
});