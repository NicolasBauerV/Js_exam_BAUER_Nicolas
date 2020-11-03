const reset = document.getElementById('btnR')

const valueInputBc = document.getElementById('valueOfBc')
const valueInputP = document.getElementById('valueOfP')
const valueInputH = document.getElementById('valueOfH')
const valueInputW = document.getElementById('valueOfW')
const valueInputA = document.getElementById('valueOfA')
const valueInputR = document.getElementById('valueOfR')

const inputBc = document.getElementById('bc')
const inputP = document.getElementById('pad')
const inputH = document.getElementById('h')
const inputW = document.getElementById('w')
const inputRad = document.getElementById('rad')
const inputRot = document.getElementById('rot')

const t1 = document.getElementById('t1')

function randomColor () {
  const rdNb = Math.floor(Math.random() * 256)
  return rdNb
}

// Déclaration fonction pour bouton color
function InputBackColor () {
  t1.style.backgroundColor = 'rgb(' + randomColor().toString() + ',' + randomColor().toString() + ',' + randomColor().toString() + ')'
  // transalte color
  const c = 255 - inputBc.value
  t1.style.color = 'rgb(' + c + ',' + c + ',' + c + ')'
  valueInputBc.textContent = inputBc.value
}

// Déclaration pour input padding
function inputPadd () {
  t1.style.padding = inputP.value + 'px'
  valueInputP.textContent = inputP.value
}

// Déclaration fonction pour input Height
function inputHeight () {
  t1.style.height = inputH.value + 'px'
  valueInputH.textContent = inputH.value
}

// Déclaration fonction pour input width
function inputWidth () {
  t1.style.width = inputW.value + 'px'
  valueInputW.textContent = inputW.value
}

// Déclaration fonction pour input radius
function radius () {
  t1.style.borderRadius = inputRad.value + 'px'
  valueInputA.textContent = inputRad.value
}

// Déclaration fonction arrow pour input rotation
const rotation = () => {
  t1.style.transform = 'rotate(' + inputRot.value + 'deg'
  valueInputR.textContent = inputRot.value
}

// Input BackgroundColor + color oninput
inputBc.oninput = InputBackColor

// Input Padding oninput
inputP.oninput = inputPadd

// Input height oninput
inputH.oninput = inputHeight

// Input width oninput
inputW.oninput = inputWidth

// Input radius oninput
inputRad.oninput = radius

// Input rotation oninput
inputRot.oninput = rotation

// Reset quand on appuie dessus

reset.onclick = function () {
  if (inputBc.getAttribute('name') === 'color') {
    inputBc.value = '0'
    InputBackColor()
  }

  if (inputP.getAttribute('name') === 'padding') {
    inputP.value = '0'
    inputPadd()
  }

  if (inputH.getAttribute('name') === 'height') {
    inputH.value = '0'
    inputHeight()
  }

  if (inputW.getAttribute('name') === 'width') {
    inputW.value = '0'
    inputWidth()
  }

  if (inputRad.getAttribute('name') === 'radius') {
    inputRad.value = '0'
    radius()
  }

  if (inputRot.getAttribute('name') === 'rotation') {
    inputRot.value = '0'
    rotation()
  }
}
