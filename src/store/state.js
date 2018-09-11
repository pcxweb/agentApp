let schoolId = ''
try {
  if (localStorage.schoolId) {
    schoolId = localStorage.schoolId
  }
} catch (e) {}

export default {
  schoolId: schoolId
}
