const origenesFoot = ['Arabe', 'Japonesa', 'Italiana', 'Griega']
const imagenesFoot = [
  'https://images.vexels.com/media/users/3/199524/isolated/preview/43b9d2643618728b1a51747a97887f5e-ilustracion-de-comida-arabe-shawarma.png',
  'https://png.pngtree.com/png-clipart/20220430/original/pngtree-sushi-logo-shop-png-image_7596643.png',
  'https://images.vexels.com/media/users/3/220500/isolated/preview/e2d600de6e1dafc5687f07dc25944303-ilustracion-de-comida-italiana-lasana.png',
  'https://golfodemorrosquillo.com/files/sitios/icono/156.png'
]
const filtro1 = document.querySelector('.filtro1')
for (let i = 0; i < origenesFoot.length; i++) {
  const filtro1Div = document.createElement('div')
  const imgPais = document.createElement('img')
  imgPais.src = imagenesFoot[i]

  const textPais = document.createElement('h2')
  textPais.textContent = origenesFoot[i]
  filtro1.append(filtro1Div)
  filtro1Div.append(imgPais)
  filtro1Div.append(textPais)
}

const filtro2 = document.querySelector('.filtro2')
const mejorValorados = document.createElement('button')
mejorValorados.textContent = 'Mejor Valorados'
filtro2.append(mejorValorados)

// mostrador de restaurantes

// filtro por tipo de comida

const footArabe = ['Boulevard Kebad', 'Estambul Doner', 'Star-Kebad']
const footArabeImg = [
  'https://images.deliveryhero.io/image/stores-glovo/stores/3bbb1019c1442d90b4732158776234396e070d1f8bb4b5c42ba89784d96fa674?t=W3siYXV0byI6eyJxIjoibG93In19LHsicmVzaXplIjp7Im1vZGUiOiJmaWxsIiwiYmciOiJ0cmFuc3BhcmVudCIsIndpZHRoIjo1ODgsImhlaWdodCI6MzIwfX1d',
  'https://images.deliveryhero.io/image/stores-glovo/stores/423ba23efa72e02f051a3cae7c45598df2b1ec8aad88559fc7d3c4bce384bd34?t=W3siYXV0byI6eyJxIjoibG93In19LHsicmVzaXplIjp7Im1vZGUiOiJmaWxsIiwiYmciOiJ0cmFuc3BhcmVudCIsIndpZHRoIjo1ODgsImhlaWdodCI6MzIwfX1d',
  'https://images.deliveryhero.io/image/stores-glovo/stores/6e7580981c71d8186ffa57d5a85d1bfc8a7c639ac37c6d03104fdc88c5d4e679?t=W3siYXV0byI6eyJxIjoibG93In19LHsicmVzaXplIjp7Im1vZGUiOiJmaWxsIiwiYmciOiJ0cmFuc3BhcmVudCIsIndpZHRoIjo1ODgsImhlaWdodCI6MzIwfX1d'
]
const footArabeTiempo = [30, 50, 10]

const footJaponesa = ['Panda Sushi', 'Mariko Sushi', 'Sushi Yun']
const footJaponesaImg = [
  'https://images.deliveryhero.io/image/stores-glovo/stores/294b590c54ca0541ff823554cf0910530dfda3341382125440d54770da362bb0?t=W3siYXV0byI6eyJxIjoibG93In19LHsicmVzaXplIjp7Im1vZGUiOiJmaWxsIiwiYmciOiJ0cmFuc3BhcmVudCIsIndpZHRoIjo1ODgsImhlaWdodCI6MzIwfX1d',
  'https://images.deliveryhero.io/image/stores-glovo/stores/9b1628af913db6fe782da2847d233600db0f04abd6c4b57af71bffc7ba70e407?t=W3siYXV0byI6eyJxIjoibG93In19LHsicmVzaXplIjp7Im1vZGUiOiJmaWxsIiwiYmciOiJ0cmFuc3BhcmVudCIsIndpZHRoIjo1ODgsImhlaWdodCI6MzIwfX1d',
  'https://images.deliveryhero.io/image/stores-glovo/stores/02f33a91c1c6215e0c8036d55d8614b1b95402f59264bf93b691abfd01db7644?t=W3siYXV0byI6eyJxIjoibG93In19LHsicmVzaXplIjp7Im1vZGUiOiJmaWxsIiwiYmciOiJ0cmFuc3BhcmVudCIsIndpZHRoIjo1ODgsImhlaWdodCI6MzIwfX1d'
]
const footJaponesaTiempo = [20, 25, 50]

const footItaliana = ['La Mafia', 'La Tagliatella', 'Grosso Napolitano']
const footItalianaImg = [
  'https://images.deliveryhero.io/image/stores-glovo/stores/750dd2c6ac29bc8e25d2ba1068543ed205fffcc325ae74ad831a9710bff2638a?t=W3siYXV0byI6eyJxIjoibG93In19LHsicmVzaXplIjp7Im1vZGUiOiJmaWxsIiwiYmciOiJ0cmFuc3BhcmVudCIsIndpZHRoIjo1ODgsImhlaWdodCI6MzIwfX1d',
  'https://images.deliveryhero.io/image/stores-glovo/stores/e75d3b1e5a9fe9aacccfd0fddb6835cd5fb9c8063a20a26745e6000fa9843bb8?t=W3siYXV0byI6eyJxIjoibG93In19LHsicmVzaXplIjp7Im1vZGUiOiJmaWxsIiwiYmciOiJ0cmFuc3BhcmVudCIsIndpZHRoIjo1ODgsImhlaWdodCI6MzIwfX1d',
  'https://images.deliveryhero.io/image/stores-glovo/stores/87885beb78fcba88d1e2f620853148d20d996a6a1c1c0a57a406dd7a3c17ff2d?t=W3siYXV0byI6eyJxIjoibG93In19LHsicmVzaXplIjp7Im1vZGUiOiJmaWxsIiwiYmciOiJ0cmFuc3BhcmVudCIsIndpZHRoIjo1ODgsImhlaWdodCI6MzIwfX1d'
]
const footItalianaTiempo = [50, 40, 30]

const footGriega = ['La Mafia', 'Mariko Sushi', 'Star-kebad']
const footGriegaImg = [
  'https://images.deliveryhero.io/image/stores-glovo/stores/750dd2c6ac29bc8e25d2ba1068543ed205fffcc325ae74ad831a9710bff2638a?t=W3siYXV0byI6eyJxIjoibG93In19LHsicmVzaXplIjp7Im1vZGUiOiJmaWxsIiwiYmciOiJ0cmFuc3BhcmVudCIsIndpZHRoIjo1ODgsImhlaWdodCI6MzIwfX1d',
  'https://images.deliveryhero.io/image/stores-glovo/stores/9b1628af913db6fe782da2847d233600db0f04abd6c4b57af71bffc7ba70e407?t=W3siYXV0byI6eyJxIjoibG93In19LHsicmVzaXplIjp7Im1vZGUiOiJmaWxsIiwiYmciOiJ0cmFuc3BhcmVudCIsIndpZHRoIjo1ODgsImhlaWdodCI6MzIwfX1d',
  'https://images.deliveryhero.io/image/stores-glovo/stores/6e7580981c71d8186ffa57d5a85d1bfc8a7c639ac37c6d03104fdc88c5d4e679?t=W3siYXV0byI6eyJxIjoibG93In19LHsicmVzaXplIjp7Im1vZGUiOiJmaWxsIiwiYmciOiJ0cmFuc3BhcmVudCIsIndpZHRoIjo1ODgsImhlaWdodCI6MzIwfX1d'
]
const footGriegaTiempo = [50, 25, 10]

const mostrador = document.querySelector('.mostrador')

let isArabeShown = false
let isJaponesaShown = false
let isItalianaShown = false
let isGriegaShown = false

const imagenArabe = document.querySelector('.filtro1 div:first-child img')
imagenArabe.addEventListener('click', function () {
  mostrador.innerHTML = ''
  if (isArabeShown) {
    const restaurantes = document.querySelectorAll('.FA')
    restaurantes.forEach((restaurante) => {
      mostrador.removeChild(restaurante)
    })
    isArabeShown = false
  } else {
    for (let i = 0; i < footArabe.length; i++) {
      const DivFA = document.createElement('Div')
      DivFA.classList.add('FA')
      const ImgFA = document.createElement('img')
      ImgFA.src = footArabeImg[i]
      const h3FA = document.createElement('h3')
      h3FA.textContent = footArabe[i]
      const pFA = document.createElement('p')
      pFA.textContent = 'tiempo de espera: ' + footArabeTiempo[i] + 'min'
      mostrador.appendChild(DivFA)
      DivFA.appendChild(ImgFA)
      DivFA.appendChild(h3FA)
      DivFA.appendChild(pFA)
    }
    isArabeShown = true
  }
})

// Imagen para activar los restaurantes japoneses
const imagenJaponesa = document.querySelector('.filtro1 div:nth-child(2) img')
imagenJaponesa.addEventListener('click', function () {
  mostrador.innerHTML = ''
  if (isJaponesaShown) {
    const restaurantes = document.querySelectorAll('.FJ')
    restaurantes.forEach((restaurante) => {
      mostrador.removeChild(restaurante)
    })
    isJaponesaShown = false
  } else {
    for (let i = 0; i < footJaponesa.length; i++) {
      const DivFJ = document.createElement('Div')
      DivFJ.classList.add('FJ')
      const ImgFJ = document.createElement('img')
      ImgFJ.src = footJaponesaImg[i]
      const h3FJ = document.createElement('h3')
      h3FJ.textContent = footJaponesa[i]
      const pFJ = document.createElement('p')
      pFJ.textContent = 'tiempo de espera: ' + footJaponesaTiempo[i] + 'min'
      mostrador.appendChild(DivFJ)
      DivFJ.appendChild(ImgFJ)
      DivFJ.appendChild(h3FJ)
      DivFJ.appendChild(pFJ)
    }
    isJaponesaShown = true
  }
})

// Imagen para activar los restaurantes italianos
const imagenItaliana = document.querySelector('.filtro1 div:nth-child(3) img')
imagenItaliana.addEventListener('click', function () {
  mostrador.innerHTML = ''
  if (isItalianaShown) {
    const restaurantes = document.querySelectorAll('.FI')
    restaurantes.forEach((restaurante) => {
      mostrador.removeChild(restaurante)
    })
    isItalianaShown = false
  } else {
    for (let i = 0; i < footItaliana.length; i++) {
      const DivFI = document.createElement('Div')
      DivFI.classList.add('FI')
      const ImgFI = document.createElement('img')
      ImgFI.src = footItalianaImg[i]
      const h3FI = document.createElement('h3')
      h3FI.textContent = footItaliana[i]
      const pFI = document.createElement('p')
      pFI.textContent = 'tiempo de espera: ' + footItalianaTiempo[i] + 'min'
      mostrador.appendChild(DivFI)
      DivFI.appendChild(ImgFI)
      DivFI.appendChild(h3FI)
      DivFI.appendChild(pFI)
    }
    isItalianaShown = true
  }
})

const imagenGriega = document.querySelector('.filtro1 div:nth-child(4) img')
imagenGriega.addEventListener('click', function () {
  const mensaje = document.createElement('h2')
  mensaje.textContent =
    'Lo sentimos, pero aún no hay restaurantes de esta categoría. Podría interesarte alguno de estos:'
  mostrador.innerHTML = ''
  mostrador.appendChild(mensaje)
  if (isGriegaShown) {
    const restaurantes = document.querySelectorAll('.FG')
    restaurantes.forEach((restaurante) => {
      mostrador.removeChild(restaurante)
    })
    isGriegaShown = false
  } else {
    for (let i = 0; i < footGriega.length; i++) {
      const DivFG = document.createElement('Div')
      DivFG.classList.add('FG')
      const ImgFG = document.createElement('img')
      ImgFG.src = footGriegaImg[i]
      const h3FG = document.createElement('h3')
      h3FG.textContent = footGriega[i]
      const pFG = document.createElement('p')
      pFG.textContent = 'tiempo de espera: ' + footGriegaTiempo[i] + 'min'
      mostrador.appendChild(DivFG)
      DivFG.appendChild(ImgFG)
      DivFG.appendChild(h3FG)
      DivFG.appendChild(pFG)
    }
    isGriegaShown = true
  }
})

// mejor valorados

const footTop = ['Star-Kebad', 'La Tagliatella', 'Panda Sushi']
const footTopImg = [
  'https://images.deliveryhero.io/image/stores-glovo/stores/6e7580981c71d8186ffa57d5a85d1bfc8a7c639ac37c6d03104fdc88c5d4e679?t=W3siYXV0byI6eyJxIjoibG93In19LHsicmVzaXplIjp7Im1vZGUiOiJmaWxsIiwiYmciOiJ0cmFuc3BhcmVudCIsIndpZHRoIjo1ODgsImhlaWdodCI6MzIwfX1d',
  'https://images.deliveryhero.io/image/stores-glovo/stores/e75d3b1e5a9fe9aacccfd0fddb6835cd5fb9c8063a20a26745e6000fa9843bb8?t=W3siYXV0byI6eyJxIjoibG93In19LHsicmVzaXplIjp7Im1vZGUiOiJmaWxsIiwiYmciOiJ0cmFuc3BhcmVudCIsIndpZHRoIjo1ODgsImhlaWdodCI6MzIwfX1d',
  'https://images.deliveryhero.io/image/stores-glovo/stores/294b590c54ca0541ff823554cf0910530dfda3341382125440d54770da362bb0?t=W3siYXV0byI6eyJxIjoibG93In19LHsicmVzaXplIjp7Im1vZGUiOiJmaWxsIiwiYmciOiJ0cmFuc3BhcmVudCIsIndpZHRoIjo1ODgsImhlaWdodCI6MzIwfX1d'
]
const footTopTiempo = [10, 40, 20]

let isMejorShown = false

mejorValorados.addEventListener('click', function () {
  mostrador.innerHTML = ''
  if (isMejorShown) {
    const restaurantes = document.querySelectorAll('.FM')
    restaurantes.forEach((restaurante) => {
      mostrador.removeChild(restaurante)
    })
    isMejorShown = false
  } else {
    for (let i = 0; i < footTop.length; i++) {
      const DivFM = document.createElement('Div')
      DivFM.classList.add('FM')
      const ImgFM = document.createElement('img')
      ImgFM.src = footTopImg[i]
      const h3FM = document.createElement('h3')
      h3FM.textContent = footTop[i]
      const pFM = document.createElement('p')
      pFM.textContent = 'tiempo de espera: ' + footTopTiempo[i] + 'min'
      mostrador.appendChild(DivFM)
      DivFM.appendChild(ImgFM)
      DivFM.appendChild(h3FM)
      DivFM.appendChild(pFM)
    }
    isMejorShown = true
  }
})
for (let i = 0; i < footTop.length; i++) {
  const DivFM = document.createElement('Div')
  DivFM.classList.add('FM')
  const ImgFM = document.createElement('img')
  ImgFM.src = footTopImg[i]
  const h3FM = document.createElement('h3')
  h3FM.textContent = footTop[i]
  const pFM = document.createElement('p')
  pFM.textContent = 'tiempo de espera: ' + footTopTiempo[i] + 'min'
  mostrador.appendChild(DivFM)
  DivFM.appendChild(ImgFM)
  DivFM.appendChild(h3FM)
  DivFM.appendChild(pFM)
}

const inputTiempo = document.createElement('input')
inputTiempo.type = 'number'
inputTiempo.placeholder = 'Tiempo máximo de espera'
filtro2.appendChild(inputTiempo)

const filtroTiempoBtn = document.createElement('button')
filtroTiempoBtn.textContent = 'Filtrar por Tiempo'
filtro2.appendChild(filtroTiempoBtn)

filtroTiempoBtn.addEventListener('click', function () {
  const tiempoMaximo = parseInt(inputTiempo.value)
  const restaurantes = document.querySelectorAll('.FA, .FJ, .FI, .FG, .FM')
  restaurantes.forEach((restaurante) => {
    restaurante.style.display = 'none'
  })
  const todosRestaurantes = [
    ...document.querySelectorAll('.FA, .FJ, .FI, .FG, .FM')
  ]
  todosRestaurantes.forEach((restaurante) => {
    const tiempoRestaurante = parseInt(
      restaurante
        .querySelector('p')
        .textContent.split(':')[1]
        .trim()
        .replace('min', '')
    )
    if (tiempoRestaurante <= tiempoMaximo) {
      restaurante.style.display = 'block'
    }
  })
})
