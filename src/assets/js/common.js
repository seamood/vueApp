export const comSelect = function (attr, data, value) {
  for (var i = 0; i < data.length; i++) {
    if (data[i][attr] === value) {
      data[i].selected = true
    } else {
      data[i].selected = false
    }
  }
}
