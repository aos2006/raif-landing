const getList = state => {
  return state.get('result').map(id => (state.get('entities')[id]))
}

export default { getList }
