export default function updateStudentGradeByCity(
  studentsList,
  city,
  newGrades,
) {
  if (!Array.isArray(studentsList)) return [];
  const results = studentsList
    .filter((student) => student.location === city)
    .map((el) => {
      const student = el;
      for (const item of newGrades) {
        if (student.id === item.studentId) {
          student.grade = item.grade;
        }
      }

      if (!student.grade) {
        student.grade = 'N/A';
      }

      return student;
    });

  return results;
}
