// const bigBoy = document.createElement('div')

const badBoy = document.createElement('div');
badBoy.id = 'badBoy';
document.body.appendChild(badBoy);

const titleContainer = document.createElement('div');
titleContainer.id = 'titleContainer';
badBoy.appendChild(titleContainer)

const title = document.createElement('div');
title.id = 'title';
titleContainer.appendChild(title);
title.innerHTML = 'working title'

const contentContainers = document.createElement('div');
contentContainers.id = 'contentContainers'
badBoy.appendChild(contentContainers)

const swatchSection = document.createElement('div');
swatchSection.id = 'swatchSection';
contentContainers.appendChild(swatchSection);

const canvasSection = document.createElement('div');
canvasSection.id = 'canvasSection';
canvasSection.addEventListener('mousedown', handleMouseDown)
canvasSection.addEventListener('mouseup', handleMouseUp)
contentContainers.appendChild(canvasSection);


const swatchHeader = document.createElement('div');
swatchHeader.id = 'swatchHeader';
swatchSection.appendChild(swatchHeader);
swatchHeader.innerHTML = 'swaaaatch'

const canvasHeader = document.createElement('div');
canvasHeader.id = 'canvasHeader';
canvasSection.appendChild(canvasHeader);
canvasHeader.innerHTML = 'get yo paint on';

const buttonContainer = document.createElement('div');
buttonContainer.id = 'buttonContainer';
swatchSection.appendChild(buttonContainer)


//set the colors in swatch
function swatch(cell) {
  let randomColor = getRandomColor();
  cell.style.backgroundColor = randomColor;

  //save color
  let swatchClick = cell.addEventListener("click", function () {
    store = cell.style.backgroundColor
  })
}

let store;

let mouse = false;

//color
function canvas(cell) {
  cell.addEventListener("click", function () {
    cell.style.backgroundColor = store
  })
  // cell.addEventListener('mouseover', function () {
  //   if (mouse) {
  //     cell.style.backgroundColor = store;
  //   }
  // })
}


// erase
let erase = document.createElement('button');
erase.id = 'erase';
buttonContainer.appendChild(erase);
erase.innerHTML = 'ERASE';
erase.addEventListener('click', function () {
  store = '#FFF'
});

// clear
let clear = document.createElement('button');
clear.id = 'clear';
buttonContainer.appendChild(clear)
clear.innerHTML = 'CLEAR';
clear.addEventListener("click", backToWhite);

function backToWhite(event) {
  const cells = document.querySelectorAll('#canvasSection .cell');
  for (let i = 0; i < cells.length - 1; i++) {
    changeBgColor('#FFF', cells[i]);
  }
}

function changeBgColor(color, target) {
  target.style.backgroundColor = color;
}

//generate random color
function getRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color;
}


//create grid
function createGrid(x, y, section, choice) {

  let container = document.createElement('div');
  container.className = 'container';

  for (let i = 0; i < x; i++) {
    let row = document.createElement('div');
    row.className = 'row';
    container.appendChild(row);
    row.innerHTML;

    for (let j = 0; j < y; j++) {
      let cell = document.createElement('div');
      cell.className = 'cell';
      row.appendChild(cell);
      //choice = swatch/canvas
      choice(cell);
    }
  } 
  section.appendChild(container)
}

function handleMouseDown() {
  mouse = true;
}

function handleMouseUp() {
  mouse = false;
}
createGrid(20, 20, swatchSection, swatch);
createGrid(25, 25, canvasSection, canvas);