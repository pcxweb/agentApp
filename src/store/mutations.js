export default {
  changeSids (state, schoolId) {
    // changeCity随意取
    state.schoolId = schoolId
    try {
      localStorage.schoolId = schoolId
    } catch (e) {}
  }
}
