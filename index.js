// an array of 7 students object of first name, last name, age, total marks
const students = [
  {
    firstName: "John",
    lastName: "Doe",
    age: 16,
    totalMarks: 450,
  },
  {
    firstName: "Jane",
    lastName: "Doe",
    age: 17,
    totalMarks: 480,
  },
  {
    firstName: "John",
    lastName: "Smith",
    age: 16,
    totalMarks: 450,
  },
  {
    firstName: "Jane",
    lastName: "Smith",
    age: 17,
    totalMarks: 480,
  },
  {
    firstName: "Miccheal",
    lastName: "Jephson",
    age: 16,
    totalMarks: 500,
  },
  {
    firstName: "Jane",
    lastName: "Doe",
    age: 17,
    totalMarks: 480,
  },
  {
    firstName: "John",
    lastName: "Smith",
    age: 16,
    totalMarks: 450,  
  },
];

// arrange the students array in ascending order of total marks
const sortedStudents = students
  .sort((a, b) => b.totalMarks - a.totalMarks)
  .map(
    (student) =>
      `${student.firstName} ${student.lastName} ${student.age} ${student.totalMarks}`
  );
console.log(sortedStudents);
