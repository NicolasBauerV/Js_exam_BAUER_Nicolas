// BackgroundColor + Color
const arrowLBc = document.getElementById('arleftbc')
const arrowRBc = document.getElementById('arrightbc')

// Padding
const arrowLPad = document.getElementById('arleftp')
const arrowRPad = document.getElementById('arrightp')

// Height
const arrowLH = document.getElementById('arlefth')
const arrowRH = document.getElementById('arrighth')

// Width
const arrowLW = document.getElementById('arleftw')
const arrowRW = document.getElementById('arrightw')

// Arrondie
const arrowLA = document.getElementById('arlefta')
const arrowRA = document.getElementById('arrighta')

// Rotation
const arrowLR = document.getElementById('arleftr')
const arrowRR = document.getElementById('arrightr')

let num = 0

// BackgroundColor + color
function mouseMoveArRightBc () {
  if (num <= 255) {
    num++
    inputBc.value = num.toString()
    InputBackColor()
  } else {
    inputBc.value = '255'
  }
}

function mouseMoveArLeftBc () {
  if (num >= 1) {
    num--
    inputBc.value = num.toString()
    InputBackColor()
  } else {
    inputBc.value = '0'
  }
}

// Padding
function mouseMoveArRightP () {
  if (num <= 30) {
    num++
    inputP.value = num.toString()
    inputPadd()
  } else {
    inputP.value = '30'
  }
}

function mouseMoveArLeftP () {
  if (num >= 1) {
    num--
    inputP.value = num.toString()
    inputPadd()
  } else {
    inputP.value = '0'
  }
}

// Height
function mouseMoveArRightH () {
  if (num <= 200) {
    num++
    inputH.value = num.toString()
    inputHeight()
  } else {
    inputH.value = '200'
  }
}

function mouseMoveArLeftH () {
  if (num >= 1) {
    num--
    inputH.value = num.toString()
    inputHeight()
  } else {
    inputH.value = '0'
  }
}

// Width
function mouseMoveArRightW () {
  if (num <= 200) {
    num++
    inputW.value = num.toString()
    inputWidth()
  } else {
    inputW.value = '200'
  }
}

function mouseMoveArLeftW () {
  if (num >= 1) {
    num--
    inputW.value = num.toString()
    inputWidth()
  } else {
    inputW.value = '0'
  }
}

// Arrondie
function mouseMoveArRightA () {
  if (num <= 50) {
    num++
    inputRad.value = num.toString()
    radius()
  } else {
    inputRad.value = '50'
  }
}

function mouseMoveArLeftA () {
  if (num >= 1) {
    num--
    inputRad.value = num.toString()
    radius()
  } else {
    inputRad.value = '0'
  }
}

// Rotation
function mouseMoveArRightR () {
  if (num <= 255) {
    num++
    inputRot.value = num.toString()
    rotation()
  } else {
    inputRot.value = '255'
  }
}

function mouseMoveArLeftR () {
  if (num >= 1) {
    num--
    inputRot.value = num.toString()
    rotation()
  } else {
    inputRot.value = '0'
  }
}

// BackgroundColor + color
arrowLBc.onmousemove = mouseMoveArLeftBc

arrowRBc.onmousemove = mouseMoveArRightBc

// Padding
arrowLPad.onmousemove = mouseMoveArLeftP

arrowRPad.onmousemove = mouseMoveArRightP

// Height
arrowLH.onmousemove = mouseMoveArLeftH

arrowRH.onmousemove = mouseMoveArRightH

// Width
arrowLW.onmousemove = mouseMoveArLeftW

arrowRW.onmousemove = mouseMoveArRightW

// Radius
arrowLA.onmousemove = mouseMoveArLeftA

arrowRA.onmousemove = mouseMoveArRightA

// Rotate
arrowLR.onmousemove = mouseMoveArLeftR

arrowRR.onmousemove = mouseMoveArRightR
