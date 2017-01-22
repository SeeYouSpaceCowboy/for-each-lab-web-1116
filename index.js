function iterativeLog(array) {
  array.forEach((element, index, array) => {
    console.log(`${index}: ${element}: ${array}`)
  })
}

function iterate(callback) {
  var colors = ["Red", "Blue", "Green", "Yellow"]
  colors.forEach(callback)
  return colors
}

function doToArray(array, callback) {
  array.forEach(callback)
}
