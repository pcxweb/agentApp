export default {
  changeSids (state, schoolId) {
    // changeSids 随意取
    state.schoolId = schoolId
    try {
      localStorage.schoolId = schoolId
    } catch (e) {}
  },
  changeStayId (state, stayId) {
    state.stayId = stayId
    try {
      localStorage.stayId = stayId
    } catch (e) {}
  },
  changeCityId (state, cityId) {
    state.cityId = cityId
    try {
      localStorage.cityId = cityId
    } catch (e) {}
  }
}
