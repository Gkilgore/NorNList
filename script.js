// "true"  -> +1
// "false" -> -1
// ""      -> -1 (blank counts as No)
function getPoints (value) {
  switch (value) {
    case 'true':
      return 1
    case 'false':
      return -1
    default:
      return -1
  }
}

function checkNaughtyOrNice () {
  const q1 = document.getElementById('q1').value
  const q2 = document.getElementById('q2').value
  const q3 = document.getElementById('q3').value
  const q4 = document.getElementById('q4').value
  const q5 = document.getElementById('q5').value

  const score =
    getPoints(q1) +
    getPoints(q2) +
    getPoints(q3) +
    getPoints(q4) +
    getPoints(q5)

  if (score > 0) {
    alert('Ho ho ho! You made the Nice List!\n\nFinal Score: ' + score)
  } else {
    alert('Uh oh... Naughty List this time.\n\nFinal Score: ' + score)
  }
}

function resetForm () {
  document.getElementById('q1').value = ''
  document.getElementById('q2').value = ''
  document.getElementById('q3').value = ''
  document.getElementById('q4').value = ''
  document.getElementById('q5').value = ''
}
