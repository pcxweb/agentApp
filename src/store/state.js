let schoolId = ''
let stayId = ''
let cityId = ''
try {
  if (localStorage.schoolId) {
    schoolId = localStorage.schoolId
  }
  if (localStorage.stayId) {
    stayId = localStorage.stayId
  }
  if (localStorage.cityId) {
    cityId = localStorage.cityId
  }
} catch (e) {}

export default {
  schoolId: schoolId,
  stayId: stayId,
  cityId: cityId
}
